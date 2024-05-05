import { LightningElement,track } from 'lwc';

export default class LDSProgrammingCreateRecord extends LightningElement {

    @track accName;
    @track accPhone;
    @track accEmail;
    @track accWebsite;
    onNameChange(event)
    {
        this.accName = event.target.value;
    }
    onPhoneChange(event)
    {
        this.accPhone = event.target.value;
    }
    onEmailChange(event)
    {
        this.accEmail = event.target.value;
    }
    onWebsiteChange(event)
    {
        this.accWebsite = event.target.value;
    }

    

    onSaveMethod(){
        const fields={
            'Name':this.accName,
            'Email':this.accEmail,
            'Phone':this.accPhone,
            'Website' : this.Website
        };
        const recordInput={apiname:}

    }
}