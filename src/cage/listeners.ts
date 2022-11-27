import { Input, Note } from "easymidi";

import { getMidiInput } from "./setup";

class BaseMidiListener {
  /**
   * This is a listener! It listens for MIDI events.
   */
  input: any;
  constructor(input: Input) {
    this.input = input;
    this.input.on("noteon", (msg: any) => {
      this.noteOn(msg);
    });
    this.input.on("noteoff", (msg: any) => {
      this.noteOff(msg);
    });
  }
  noteOn(msg: Note) {}
  noteOff(msg: Note) {}
}

class MidiListener extends BaseMidiListener {
  noteOn(msg: Note) {
    console.log(msg);
  }
  noteOff(msg: Note) {
    console.log(msg);
  }
}

export const setupMidiListeners = () => {
  const listener = new MidiListener(getMidiInput());
};
