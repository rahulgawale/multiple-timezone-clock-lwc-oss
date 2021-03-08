import { /* LightningElement, */ api } from 'lwc';
import SLDSLightningElement from 'my/sldsLightningElement';
/**
 * Show an item
 */
export default class Child extends SLDSLightningElement {
    @api
    timeZone = '';

    @api
    city = '';

    @api
    is12Hours = false;

    @api
    refreshInterval = 'second';

    _time;
    date;

    @api
    get time() {
        return this._time;
    }
    set time(value) {
        let optionsMilitary = {
            hour12: this.is12Hours,
            hour: '2-digit',
            minute: '2-digit'
        };

        if (this.refreshInterval === 'second') {
            optionsMilitary.second = '2-digit';
        }

        this._time = value.toLocaleString('en-US', {
            ...optionsMilitary,
            timeZone: this.timeZone
        });
        let dateOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        };
        this.date = value.toLocaleString('en-US', {
            ...dateOptions,
            timeZone: this.timeZone
        });
    }
}
