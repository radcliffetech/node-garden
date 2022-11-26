import easymidi, { Channel, Note, Output } from "easymidi";

export const getMidiOutput = () => {
  return new easymidi.Output("IAC Driver MIDI Bus");
};

class BaseInstrument {
  /**
   * This is an instrument! It makes sounds.
   */
  name: string;
  output: Output;
  channel: Channel = 0;
  note_len = 1000;
  velocity = 127;

  constructor(name: string, output: Output) {
    this.name = name;
    this.output = output;
  }

  play(params: any): void {}
  stop(): void {}
}

export class Instrument extends BaseInstrument {
  play({ note }: { note: number }) {
    console.log(`playing the ${this.name}`);
    let noteObj: Note = {
      note: note,
      velocity: this.velocity,
      channel: this.channel,
    };
    this.output.send("noteon", noteObj);

    setTimeout(() => {
      noteObj.velocity = 0;
      this.output.send("noteoff", noteObj);
      console.log(`stopped playing the ${this.name}`);
    }, this.note_len);
  }
}
