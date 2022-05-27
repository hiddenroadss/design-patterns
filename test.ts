import { StatsTracker } from "./creational/singleton/singleton";

export function test() {
    const tracker = StatsTracker.instance;
    console.log(tracker.buttonClicks);
    console.log(tracker.widgetViews);
}