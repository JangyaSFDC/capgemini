import { LightningElement,api } from 'lwc';

export default class ChildComponentProperty extends LightningElement {
    @api  childComponentProperty = "Child Component Property";
}