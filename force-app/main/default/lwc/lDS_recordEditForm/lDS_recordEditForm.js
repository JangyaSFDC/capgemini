import { LightningElement ,api} from 'lwc';
import { ShowToastEvent } from  'lightning/platformShowToastEvent';

export default class LDS_recordEditForm extends LightningElement {

    @api recordId;
    @api objectApiName;

    handleOnsuccess()
    {
        const showSuccessMessage = new ShowToastEvent({
            title : 'Success',
            message : 'Record Updated Successfully.',
            variant : 'success',
            mode : 'dismissable'
        });

            this.dispatchEvent(showSuccessMessage);
    }
}