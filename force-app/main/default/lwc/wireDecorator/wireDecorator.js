import { LightningElement,track,wire } from 'lwc';
import GetAllAccounts from '@salesforce/apex/wiring.GetAllOpp';
export default class WireDecorator extends LightningElement
 {
@track accountRec;
@wire (GetAllAccounts) accountRec;

}