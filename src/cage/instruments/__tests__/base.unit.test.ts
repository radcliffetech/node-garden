import { getMidiOutput } from "../../setup";
import { BaseInstrument } from "../base";

describe("BaseInstrument tests", () => {
  const output = getMidiOutput();

  it("should be able to create a BaseInstrument", () => {
    const base = new BaseInstrument("test", output);
    expect(base).toBeTruthy();
  });
});
