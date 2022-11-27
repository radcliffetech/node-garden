import { LongPlayer } from "./instruments/LongPlayer";
import { TestTone } from "./instruments/TestTone";
import { Wanderer } from "./instruments/Wanderer";
import { getMidiOutput } from "./setup";

export const buildOrchestra = () => {
  const output = getMidiOutput();

  return {
    testTone: new TestTone("Test Tone", output, 2),
    wanderer: new Wanderer("Wanderer", output, 2),
    wanderer2: new Wanderer("Wanderer 2", output, 3),
    longPlayer: new LongPlayer("Long Player", output, 4),
  };
};
