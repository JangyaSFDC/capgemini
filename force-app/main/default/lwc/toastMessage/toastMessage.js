import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastMessage extends LightningElement {

    showToast(title, message, variant, mode) {
        const toastEvent = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(toastEvent);
    }

    showSuccessToast() {
        this.showToast('Success', 'Operation Completed Successfully.', 'success', 'dismissable');
    }

    showWarningToast() {
        this.showToast('Warning', 'Please Enterr the Values for the Required Fields.', 'warning', 'sticky');
    }

    showErrorToast() {
        this.showToast('Error', 'Operation has been Failed..!! Errors Occurred.', 'error', 'dismissable');
    }

    showInformationToast() {
        this.showToast('Information', 'Please Review the Document with your change', 'info', 'pester');
    }
}
