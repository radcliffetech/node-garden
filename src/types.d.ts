export interface MidiOutput {
  send: (
    cmd: string,
    params: { note: number; velocity: number; channel: number }
  ) => void;
}
