import { /* LightningElement, */ api } from "lwc";
import SLDSLightningElement from "my/sldsLightningElement";
/**
 * Show an item
 */
export default class Child extends SLDSLightningElement {
    @api
    timeZone = "";

    @api
    city = "";

    @api
    is12Hours = false;

    @api
    refreshInterval;

    @api
    footerNote;

    _time;
    date;
    weekday;
    themeClass;

    @api
    get time() {
        return this._time;
    }
    set time(value) {
        let optionsMilitary = {
            hour12: this.is12Hours,
            hour: "numeric",
            minute: "2-digit"
        };

        if (this.refreshInterval === "second") {
            optionsMilitary.second = "2-digit";
        }

        let [hh, mm] = value
            .toLocaleString("en-US", {
                ...optionsMilitary,
                timeZone: this.timeZone
            })
            .split(":");

        if (parseInt(hh, 10) === 24) {
            hh = "00";
        }

        let hoursNow = parseInt(hh, 10);
        if (hoursNow >= 20 || hoursNow <= 8) {
            this.themeClass = "slds-p-around_xx-small nightTime";
        } else {
            this.themeClass = "slds-p-around_xx-small dayTime";
        }

        this._time =
            hh === "00" && mm === "00"
                ? "24:00"
                : (hh + ":" + mm).replace(/^24/, "00");

        let dateOptions = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        };
        this.date = value.toLocaleString("en-US", {
            ...dateOptions,
            timeZone: this.timeZone
        });

        let weekdayOptions = {
            weekday: "long"
        };
        this.weekday = value.toLocaleString("en-US", {
            ...weekdayOptions,
            timeZone: this.timeZone
        });
    }
}
