import { buildOrchestra } from "../orchestra";

describe("Orchestra", () => {
  it("should be able to create an orchestra", () => {
    const orchestra = buildOrchestra();
    expect(orchestra).toBeTruthy();
  });
});
