import { LightningElement ,track,wire} from 'lwc';
import GetAllOpp from '@salesforce/apex/wiringTest.GetAllOpp';
export default class WiringDecOpp extends LightningElement
 {

    @track oppRec;
    @wire (GetAllOpp) oppRec;

}