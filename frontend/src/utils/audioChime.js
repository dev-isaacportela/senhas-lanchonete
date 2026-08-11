// Web Audio API Synthesizer for "Ding-Dong" Chime Sound
// Safe, cross-browser audio generation without external sound files.

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playChimeSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // First Tone ("Ding" - E5 659.25Hz)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, now); // E5

    gain1.gain.setValueAtTime(0.0, now);
    gain1.gain.linearRampToValueAtTime(0.6, now + 0.05); // Attack
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.8); // Decay

    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    osc1.start(now);
    osc1.stop(now + 0.8);

    // Second Tone ("Dong" - C5 523.25Hz) delayed by 0.35s
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(523.25, now + 0.35); // C5

    gain2.gain.setValueAtTime(0.0, now + 0.35);
    gain2.gain.linearRampToValueAtTime(0.7, now + 0.40); // Attack
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.4); // Longer Decay

    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc2.start(now + 0.35);
    osc2.stop(now + 1.4);

  } catch (err) {
    console.warn('Não foi possível tocar o sinal sonoro:', err);
  }
}
