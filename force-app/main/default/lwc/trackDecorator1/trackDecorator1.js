// TrackDecorator1.js
import { LightningElement, track } from 'lwc';

export default class TrackDecorator1 extends LightningElement {
    @track customMessage = 'Private ReActive Property';

    handleOnChange(event)
    {
        //this.customMessage = 'ReActive Property Vaue has been Changed.';
        this.customMessage = event.target.value;
    }
}
