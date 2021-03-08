//import { LightningElement } from 'lwc';
import SLDSLightningElement from 'my/sldsLightningElement';
export default class App extends SLDSLightningElement {
    time = new Date();

    title = 'Multiple Timezone Clock';
    refreshInterval = 'minute';

    /**
     * Getter for the features property
     */
    get clocks() {
        return [
            {
                timeZone: 'America/New_York',
                city: 'New York',
                is12Hours: false
            },
            {
                timeZone: 'Etc/GMT',
                city: 'London/GMT',
                is12Hours: false
            },
            {
                timeZone: 'US/Central',
                city: 'Chicago',
                is12Hours: false
            },
            {
                timeZone: 'HST',
                city: 'Hawaii',
                is12Hours: false
            },
            {
                timeZone: 'Asia/Chongqing',
                city: 'Philippines',
                is12Hours: false
            },
            {
                timeZone: 'Asia/Kolkata',
                city: 'Pune',
                is12Hours: false
            },
            {
                timeZone: 'Etc/GMT+2',
                city: 'South Africa/Johannesburg',
                is12Hours: false
            },
            {
                timeZone: 'Etc/GMT+1',
                city: 'Frankfurt',
                is12Hours: false
            }
        ];
    }

    intervalId;

    get interval() {
        return this.refreshInterval === 'minute' ? 60000 : 1000;
    }

    connectedCallback() {
        this.intervalId = setInterval(() => {
            this.time = new Date();
        }, 1000);
    }

    disconnectedCallback() {
        clearInterval(this.intervalID);
    }
}
