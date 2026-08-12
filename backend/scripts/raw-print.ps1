# raw-print.ps1
# Envia um arquivo de bytes crus (ESC/POS) para uma impressora do Windows em modo RAW,
# sem passar pelo driver grafico. Usa P/Invoke em winspool.drv.
#
# Uso:
#   powershell -NoProfile -ExecutionPolicy Bypass -File raw-print.ps1 -PrinterName "POS-58" -FilePath "C:\temp\job.bin"
#
# Codigos de saida: 0 = sucesso, 1 = falha (mensagem no stderr)

param(
  [Parameter(Mandatory = $true)][string]$PrinterName,
  [Parameter(Mandatory = $true)][string]$FilePath,
  [string]$DocName = "Comprovante ESC/POS"
)

$ErrorActionPreference = 'Stop'

Add-Type -TypeDefinition @"
using System;
using System.IO;
using System.Runtime.InteropServices;

public static class RawPrinterHelper
{
    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    public class DOCINFOW
    {
        [MarshalAs(UnmanagedType.LPWStr)] public string pDocName;
        [MarshalAs(UnmanagedType.LPWStr)] public string pOutputFile;
        [MarshalAs(UnmanagedType.LPWStr)] public string pDataType;
    }

    [DllImport("winspool.drv", EntryPoint = "OpenPrinterW", SetLastError = true, CharSet = CharSet.Unicode, ExactSpelling = true, CallingConvention = CallingConvention.StdCall)]
    public static extern bool OpenPrinter(string src, out IntPtr hPrinter, IntPtr pd);

    [DllImport("winspool.drv", EntryPoint = "ClosePrinter", SetLastError = true, ExactSpelling = true, CallingConvention = CallingConvention.StdCall)]
    public static extern bool ClosePrinter(IntPtr hPrinter);

    [DllImport("winspool.drv", EntryPoint = "StartDocPrinterW", SetLastError = true, CharSet = CharSet.Unicode, ExactSpelling = true, CallingConvention = CallingConvention.StdCall)]
    public static extern bool StartDocPrinter(IntPtr hPrinter, int level, [In, MarshalAs(UnmanagedType.LPStruct)] DOCINFOW di);

    [DllImport("winspool.drv", EntryPoint = "EndDocPrinter", SetLastError = true, ExactSpelling = true, CallingConvention = CallingConvention.StdCall)]
    public static extern bool EndDocPrinter(IntPtr hPrinter);

    [DllImport("winspool.drv", EntryPoint = "StartPagePrinter", SetLastError = true, ExactSpelling = true, CallingConvention = CallingConvention.StdCall)]
    public static extern bool StartPagePrinter(IntPtr hPrinter);

    [DllImport("winspool.drv", EntryPoint = "EndPagePrinter", SetLastError = true, ExactSpelling = true, CallingConvention = CallingConvention.StdCall)]
    public static extern bool EndPagePrinter(IntPtr hPrinter);

    [DllImport("winspool.drv", EntryPoint = "WritePrinter", SetLastError = true, ExactSpelling = true, CallingConvention = CallingConvention.StdCall)]
    public static extern bool WritePrinter(IntPtr hPrinter, IntPtr pBytes, int dwCount, out int dwWritten);

    // Envia os bytes do arquivo para a impressora. Lanca excecao com o erro do Win32 se falhar.
    public static void SendFile(string printerName, string filePath, string docName)
    {
        byte[] bytes = File.ReadAllBytes(filePath);

        IntPtr hPrinter = IntPtr.Zero;
        if (!OpenPrinter(printerName, out hPrinter, IntPtr.Zero))
            throw new Exception("OpenPrinter falhou (impressora nao encontrada ou sem permissao): " + Marshal.GetLastWin32Error());

        try
        {
            DOCINFOW di = new DOCINFOW();
            di.pDocName = docName;
            di.pDataType = "RAW";

            if (!StartDocPrinter(hPrinter, 1, di))
                throw new Exception("StartDocPrinter falhou (spooler parado ou driver sem suporte a RAW): " + Marshal.GetLastWin32Error());

            try
            {
                if (!StartPagePrinter(hPrinter))
                    throw new Exception("StartPagePrinter falhou: " + Marshal.GetLastWin32Error());

                IntPtr pUnmanagedBytes = Marshal.AllocCoTaskMem(bytes.Length);
                try
                {
                    Marshal.Copy(bytes, 0, pUnmanagedBytes, bytes.Length);
                    int written = 0;
                    if (!WritePrinter(hPrinter, pUnmanagedBytes, bytes.Length, out written))
                        throw new Exception("WritePrinter falhou: " + Marshal.GetLastWin32Error());
                    if (written != bytes.Length)
                        throw new Exception("WritePrinter gravou " + written + " de " + bytes.Length + " bytes.");
                }
                finally
                {
                    Marshal.FreeCoTaskMem(pUnmanagedBytes);
                }

                EndPagePrinter(hPrinter);
            }
            finally
            {
                EndDocPrinter(hPrinter);
            }
        }
        finally
        {
            ClosePrinter(hPrinter);
        }
    }
}
"@

try {
  if (-not (Test-Path -LiteralPath $FilePath)) {
    throw "Arquivo nao encontrado: $FilePath"
  }

  [RawPrinterHelper]::SendFile($PrinterName, $FilePath, $DocName)
  Write-Output "OK"
  exit 0
}
catch {
  [Console]::Error.WriteLine($_.Exception.Message)
  exit 1
}
