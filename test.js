"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const singleton_1 = require("./creational/singleton");
function test() {
    const tracker = singleton_1.StatsTracker.instance;
    console.log(tracker.buttonClicks);
    console.log(tracker.widgetViews);
}
exports.test = test;
