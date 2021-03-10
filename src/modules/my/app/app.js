//import { LightningElement } from 'lwc';
import SLDSLightningElement from "my/sldsLightningElement";
export default class App extends SLDSLightningElement {
    time = new Date();

    title = "Multiple Timezones Clock";
    refreshInterval = "minute";

    /**
     * Getter for the features property
     */
    get clocks() {
        return [
            {
                timeZone: "America/New_York",
                city: "New York",
                is12Hours: false,
                footerNote: "America/New York"
            },
            {
                timeZone: "US/Central",
                city: "Chicago",
                is12Hours: false,
                footerNote: "America/Chicago"
            },
            {
                timeZone: "America/Hermosillo",
                city: "Denver",
                is12Hours: false,
                footerNote: "America/Denver"
            },
            {
                timeZone: "America/Los_Angeles",
                city: "San Francisco",
                is12Hours: false,
                footerNote: "America/San Francisco"
            },
            {
                timeZone: "HST",
                city: "Honolulu",
                is12Hours: false,
                footerNote: "Hawaii/Honolulu"
            },
            {
                timeZone: "Asia/Tokyo",
                city: "Tokyo",
                is12Hours: false,
                footerNote: "Japan/Tokyo"
            },
            {
                timeZone: "Asia/Hong_Kong",
                city: "Hong Kong",
                is12Hours: false,
                footerNote: "Honk Kong"
            },
            {
                timeZone: "Africa/Maputo",
                city: "Manila",
                is12Hours: false,
                footerNote: "Philippines/Manila"
            },
            {
                timeZone: "Asia/Kolkata",
                city: "Pune",
                is12Hours: false,
                footerNote: "India/Pune"
            },
            {
                timeZone: "Etc/GMT+2",
                city: "Johannesburg",
                is12Hours: false,
                footerNote: "South Africa/Johannesburg"
            },
            {
                timeZone: "Etc/GMT+1",
                city: "Frankfurt",
                is12Hours: false,
                footerNote: "Germany/Frankfurt"
            },
            {
                timeZone: "GMT",
                city: "London",
                is12Hours: false,
                footerNote: "UK/London"
            }
        ];
    }

    intervalId;

    get interval() {
        return this.refreshInterval === "minute" ? 60000 : 1000;
    }

    connectedCallback() {
        this.intervalId = setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    disconnectedCallback() {
        clearInterval(this.intervalId);
    }
}
