export declare interface Voice {
  lang: string;
}

export declare class SpeechSynthesisUtterance {
  voice: Voice;
  text: string;
  pitch: number;
  rate: number;
}

export declare var speechSynthesis: {
  cancel(): void;
  getVoices(): Voice[];
  speak(utterance: SpeechSynthesisUtterance): void;
};

export declare var Synth: {
  createInstrument(instrument: string): SynthInstrument;
  setVolume(volume: number);
}

export declare class SynthInstrument {
  play(note: string, octave: number, duration: number);
}
