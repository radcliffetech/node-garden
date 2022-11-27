import { Channel, Note, Output } from "easymidi";

import { BaseInstrument } from "./base";

export class LongPlayer extends BaseInstrument<{ note: number }> {
  /**
   *  Plays a long note.
   *
   */

  note: Note;

  constructor(name: string, output: Output, channel: Channel = 0) {
    /**
     * Constructor for the Long Player.
     */
    super(name, output, channel);
    this.note = {
      note: 60,
      velocity: this.velocity,
      channel: this.channel,
    };
  }

  play({ note }: { note: number }) {
    if (!this.playing) {
      this.playing = true;
    } else {
      this.output.send("noteoff", this.note);
    }
    this.note = {
      ...this.note,
      note: note,
    };
    this.output.send("noteon", this.note);
  }

  stop() {
    this.output.send("noteoff", this.note);
    this.playing = false;
  }
}
