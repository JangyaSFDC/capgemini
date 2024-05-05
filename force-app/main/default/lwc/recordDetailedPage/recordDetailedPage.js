import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from  'lightning/platformShowToastEvent';

export default class RecordDetailedPage extends LightningElement
 {

    @api recordId;
    @api objectApiName;

    handleSuccess()
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
