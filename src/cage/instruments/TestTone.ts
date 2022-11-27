import { Note } from "easymidi";

import { BaseInstrument } from "./base";

export class TestTone extends BaseInstrument<{ note: number }> {
  /**
   *  Simple test tone.
   *
   */
  play({ note }: { note: number }) {
    let noteObj: Note = {
      note: note,
      velocity: this.velocity,
      channel: this.channel,
    };
    this.output.send("noteon", noteObj);
    setTimeout(() => this.output.send("noteoff", noteObj), this.note_len);
  }
}
