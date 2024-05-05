// PropChildComponent.js
import { LightningElement, api } from 'lwc';

export default class PropChildComponent extends LightningElement {
    @api childprop = 'Importing child property before button click';
}
