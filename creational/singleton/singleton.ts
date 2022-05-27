export class StatsTracker {
    buttonClicks: number = 0;
    facebookShares: number = 0;
    twitterShares: number = 0;
    widgetViews: number = 0;

    constructor() {
        if ( StatsTracker._instance) {
            throw new Error('The instance of this singleton is already initialized')
        }
        
    }

    private static _instance = new StatsTracker();

    public static get instance(): StatsTracker {
        return this._instance;
    }
}