import { LightningElement,track,api } from 'lwc';

export default class ApiDecorator extends LightningElement {


    @track customerName = 'Praveen Kumar';
    @api productName = 'Desktop Device';
    employeeName = 'Sampath Kumar'; // Private By Default.

    handleOnclick()
    {
        this.customerName = 'New Praveen Kumar.';
        this.productName = 'New Desktop Device.';
        this.employeeName = 'New Employee.';
    }
}