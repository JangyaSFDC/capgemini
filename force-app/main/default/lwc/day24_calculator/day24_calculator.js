import { LightningElement } from 'lwc';

export default class Day24_calculator extends LightningElement {

    firstNumber;
    secondNumber;
    operationResult;

    handleOnChange(event)
    {
        const elementName = event.target.name;
        const elementValue = event.target.value;

        if(elementName === 'fNumber')
        {
            this.firstNumber = elementValue;
        }
        else
        {
            this.secondNumber = elementValue;
        }
    }

    handleAddition()
    {
        this.operationResult = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }

    handleSubtraction()
    {
        this.operationResult = parseInt(this.firstNumber) - parseInt(this.secondNumber);
    }

    handleMultiply()
    {
        this.operationResult = parseInt(this.firstNumber) * parseInt(this.secondNumber);
    }

    handleDivision()
    {
        if(this.secondNumber > 0)
            this.operationResult = parseInt(this.firstNumber) / parseInt(this.secondNumber);
        else
            alert('Division Operation cannot be performed. As the Second Number Value is Zero.');
    }

    handleModulus()
    {
        this.operationResult = parseInt(this.firstNumber) % parseInt(this.secondNumber);
    }

}