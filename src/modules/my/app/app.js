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
                timeZone: "Etc/GMT-8",
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
                timeZone: "Africa/Johannesburg",
                city: "Johannesburg",
                is12Hours: false,
                footerNote: "South Africa/Johannesburg"
            },
            {
                timeZone: "Etc/GMT+1",
                city: "Frankfurt",
                is12Hours: false,
                footerNote: "Europe/Berlin" /* Germany/Frankfurt */
            },
            {
                timeZone: "GMT",
                city: "London",
                is12Hours: false,
                footerNote: "UK/London"
            },
            {
                timeZone: "Asia/Bahrain",
                city: "Bahrain",
                is12Hours: false,
                footerNote: "Bahrain"
            },
            {
                timeZone: "Etc/GMT-1",
                city: "Paris",
                is12Hours: false,
                footerNote: "Paris/France"
            },
            {
                timeZone: "Etc/GMT-11",
                city: "Sydney",
                is12Hours: false,
                footerNote: "Sydney/Australia"
            },
            {
                timeZone: "Etc/GMT-11",
                city: "Melbourne",
                is12Hours: false,
                footerNote: "Melbourne/Australia"
            },
            {
                timeZone: "Etc/GMT-2",
                city: "Israel",
                is12Hours: false,
                footerNote: "Israel"
            },
            {
                timeZone: "Etc/GMT-2",
                city: "Greece",
                is12Hours: false,
                footerNote: "Greece"
            },
            {
                timeZone: "Etc/GMT-1",
                city: "Italy",
                is12Hours: false,
                footerNote: "Italy"
            },
            {
                timeZone: "Etc/GMT-7",
                city: "Phuket",
                is12Hours: false,
                footerNote: "Phuket/Thailand"
            },
            {
                timeZone: "Etc/GMT-1",
                city: "Morocco",
                is12Hours: false,
                footerNote: "Morocco"
            },
            {
                timeZone: "Etc/GMT-1",
                city: "Madrid",
                is12Hours: false,
                footerNote: "Madrid/Spain"
            },
            {
                timeZone: "Etc/GMT-3",
                city: "Moscow",
                is12Hours: false,
                footerNote: "Moscow/Russia"
            },
            {
                timeZone: "Etc/GMT-2",
                city: "Centurion",
                is12Hours: false,
                footerNote: "Centurion/South Africa"
            },
            {
                timeZone: "Etc/GMT-8",
                city: "Shanghai",
                is12Hours: false,
                footerNote: "Shanghai/China"
            },
            {
                timeZone: "Etc/GMT-8",
                city: "Taiwan",
                is12Hours: false,
                footerNote: "Taiwan"
            },
            {
                timeZone: "Etc/GMT-1",
                city: "Montpellier",
                is12Hours: false,
                footerNote: "Montpellier/France"
            },
            {
                timeZone: "Etc/GMT-1",
                city: "Marcé",
                is12Hours: false,
                footerNote: "Marcé/France"
            },
            {
                timeZone: "Etc/GMT+4",
                city: "Puerto Rico",
                is12Hours: false,
                footerNote: "Puerto Rico"
            },
            {
                timeZone: "Etc/GMT+3",
                city: "São Paulo",
                is12Hours: false,
                footerNote: "São Paulo/Brazil"
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
