"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsTracker = void 0;
class StatsTracker {
    constructor() {
        this.buttonClicks = 0;
        this.facebookShares = 0;
        this.twitterShares = 0;
        this.widgetViews = 0;
        if (StatsTracker._instance) {
            throw new Error('The instance of this singleton is already initialized');
        }
    }
    static get instance() {
        return this._instance;
    }
}
exports.StatsTracker = StatsTracker;
StatsTracker._instance = new StatsTracker();
