import { LightningElement,track,api } from 'lwc';

export default class PropParentComponent extends LightningElement {

    @track parentProp = 'Hello from Parent';

    handleOnClick() {
        this.parentProp = "value has been assigned from button click by parent";
        
    }
}
