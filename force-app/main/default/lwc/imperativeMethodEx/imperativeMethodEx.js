import { LightningElement,track} from 'lwc';
import GetAllOpp from  '@salesforce/apex/wiringTest.GetAllOpp'

export default class ImperativeMethodEx extends LightningElement 
{
    @track allOppRecords;

    clickme()
    {
        GetAllOpp().then(result=>{this.allOppRecords=result;})
        .catch(error=>{console.log('error occured--->'+error);})
    }
}