import { Input, Output } from "easymidi";

export const getMidiOutput = (): Output => {
  return new Output("IAC Driver MIDI Bus");
};

export const getMidiInput = (): Input => {
  return new Input("IAC Driver MIDI Bus");
};
