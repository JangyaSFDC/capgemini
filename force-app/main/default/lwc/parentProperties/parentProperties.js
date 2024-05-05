import { LightningElement,track} from 'lwc';

export default class ParentProperties extends LightningElement {

    @track parentComponentProperty = 'Value has been assigned from Javascript.';

    handleOnClick()
    {
        this.parentComponentProperty = 'Value has been Assigned from Button Click.';
    }
}