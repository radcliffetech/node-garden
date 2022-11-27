import { Channel, Output } from "easymidi";

export class BaseInstrument<T> {
  /**
   * This is an instrument! It makes sounds.
   */

  name: string;
  output: Output;

  channel: Channel = 0;

  playing: boolean = false;

  note_len = 1000;
  velocity = 127;

  constructor(name: string, output: Output, channel: Channel = 0) {
    this.name = name;
    this.output = output;
    this.channel = channel;
  }

  prepare(params: any): void {
    this.playing = true;
  }

  play(params: T): void {
    // This is a stub. Subclasses should override this.
  }

  stop(): void {
    this.playing = false;
  }
}
