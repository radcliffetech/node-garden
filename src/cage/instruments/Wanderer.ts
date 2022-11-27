import { Channel, Note, Output } from "easymidi";

import { BaseInstrument } from "./base";

export class Wanderer extends BaseInstrument<never> {
  /**
   * The Wanderer is a simple instrument that does a walk.
   * It chooses a random interval and a random duration,
   * and plays that note for that duration.
   *
   */

  note: Note;

  MAX_PITCH = 80;
  MIN_PITCH = 32;

  PITCH_CHOICES = [2, 5, 7, -2, -5];
  DURATION_CHOICES = [
    250, 250, 250, 250, 250, 500, 500, 1000, 1000, 2000, 4000,
  ];

  constructor(name: string, output: Output, channel: Channel = 0) {
    /**
     *  Constructor for the Wanderer.
     *
     * @param name The name of the instrument.
     * @param output The MIDI output to use.
     * @param channel The MIDI channel to use.
     */
    super(name, output, channel);
    this.note = {
      note: 60,
      velocity: this.velocity,
      channel: this.channel,
    };
  }

  prepare({ note }: { note: number }) {
    super.prepare({});
    this.note = {
      note: note,
      velocity: this.velocity,
      channel: this.channel,
    };
  }

  play() {
    const callback = () => {
      if (this.playing) {
        this._findNextNote();
        this.play();
      }
    };

    this.output.send("noteon", this.note);
    setTimeout(() => {
      this.output.send("noteoff", this.note);
      callback();
    }, this.note_len);
  }

  _findNextNote(): void {
    this.note = {
      ...this.note,
      note: this._getNextInterval(this.note),
    };
    this.note_len = this._getNextLength(this.note);
  }

  _getNextInterval(note: Note): number {
    if (note.note + this.PITCH_CHOICES[0] >= this.MAX_PITCH) {
      return (
        note.note -
        this.PITCH_CHOICES[
          Math.floor(Math.random() * this.PITCH_CHOICES.length)
        ]
      );
    }
    return (
      note.note +
      this.PITCH_CHOICES[Math.floor(Math.random() * this.PITCH_CHOICES.length)]
    );
  }

  _getNextLength(note: Note): number {
    return this.DURATION_CHOICES[
      Math.floor(Math.random() * this.DURATION_CHOICES.length)
    ];
  }
}
