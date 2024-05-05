import { LightningElement } from 'lwc';

export default class Day24_homework1 extends LightningElement {

/*
    productquantity;
    unitprice;
    discountAmt;
    operationResult;

    handleOnChange(event)
    {
        const elementName = event.target.name;
        const elementValue = event.target.value;

        if(elementName === 'productQuantity')
        {
            this.productquantity = elementValue;
        }
        if(elementName==='unitprice')
        {
            this.unitprice = elementValue;
        }
        if(elementName==='discountAmt')
        {
            this.discountAmt=elementValue;
        }
        
        calculateBill()
    {
        this.operationResult = parseInt(this.productquantity) * parseInt(this.unitprice)-(parseInt(this.productquantity)*this.discountAmt);
    }
        clear()
        {
            unitprice='';
            discountAmt='';
            productquantity='';
        }
    }
*/


    productquantity;
    unitprice;
    discountAmt;
    operationResult;

    handleOnChange(event) {
        const elementName = event.target.name;
        const elementValue = event.target.value;

        if (elementName === 'productQuantity') {
            this.productquantity = elementValue;
        }
        if (elementName === 'unitPrice') {
            this.unitprice = elementValue;
        }
        if (elementName === 'discount') {
            this.discountAmt = elementValue;
        }
    }

    calculateBill() {
        this.operationResult = parseInt(this.productquantity) * parseInt(this.unitprice) - (parseInt(this.productquantity) * this.discountAmt);
    }

    clear() {
        this.unitprice = '';
        this.discountAmt = '';
        this.productquantity = '';
        this.operationResult='';
    }
}

