import { LightningElement, track } from 'lwc';
import SearchAccountsByName from '@salesforce/apex/wiringTest.SearchAccountsByName';

export default class ImperativeWithParam extends LightningElement {
    @track textBox1;
    @track searchResultList;

    typeMe(event) {
       // this.textBox1 = event.target.value;
        this.textBox1 = event.target.value;
    }

    searchAccountRecords() {
        SearchAccountsByName({ startingChars: this.textBox1 })
            .then(result => {
                this.searchResultList = result;
            })
            .catch(error => {
                console.error('Error occurred: ' + error);
            });
    }
}
