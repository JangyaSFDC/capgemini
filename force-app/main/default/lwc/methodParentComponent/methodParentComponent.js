import { LightningElement,track } from 'lwc';

export default class MethodParentComponent extends LightningElement {

    @track parentComponentValue = 'value has been assigned from java script';

    clickMe(){
        this.parentComponentValue="value has been assigned from button click";
    }

    showMessage()
    {
        var invokecus=this.template.querySelector('c-method-child-component');
        invokecus.showCustomMessage();
    }
    showCustomer()
    {
        var datacus=this.template.querySelector('c-method-child-component');
        var parameters={'firstName':'jangya','lastName':'Meher'};
        datacus.showDetails(parameters)
    }
}