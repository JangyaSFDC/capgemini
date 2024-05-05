import { LightningElement,api } from 'lwc';

export default class MethodChildComponent extends LightningElement {

    @api childProperty = 'child component property';

@api showCustomMessage(){
    //some business logic
    alert('CHILD COMPONENT NON PARAMETERIZED');
}
@api showDetails(customerNameParameter)
{
    //some business logic
    alert("customer name is====>>"+customerNameParameter.firstName+''+customerNameParameter.lastName);
}

}