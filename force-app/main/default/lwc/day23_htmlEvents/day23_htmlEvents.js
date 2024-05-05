import { LightningElement } from 'lwc';

export default class Day23_htmlEvents extends LightningElement {

    searchtxt="jangyadatta";
    handleOnchange(){
        alert("text changed");
    }

    handleOnchange(event)
    {
       const btn1=event.target.label;
       const btn2=event.target.name;
       alert("you have clicked on "+btn1+"and you picked the name as "+btn2);
    }
}