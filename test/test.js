"use strict";

let Shape = require('@alu0100769579/ull-shape-alu0100769579');
let Rectangle = require('../rectangle.js');

require("should");

describe("getArea", function() {
  it("must compute the rectangle area correctly. Shape object", function() {
    let a = new Shape({ width: 100, height: 50 }, 'Rectangle');
    let s = a.getArea();
    s.should.equal(5000);
  })
  it("must compute the rectangle area correctly. Rectangle object", function() {
    let a = new Rectangle({ width: 100, height: 50 });
    let s = a.getArea();
    s.should.equal(5000);
  })
});
