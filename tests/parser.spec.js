const { expect } = require("chai");

const parse = require("../src/parser");

describe("parse", () => {
  it("should parse correctly", () => {
    expect(parse("log->Hello World\nset->234").body).to.eql([
      { type: "FunctionUsage", func: "log", params: ["Hello World"] },
      { type: "FunctionUsage", func: "set", params: ["234"] },
    ]);
  });
});
