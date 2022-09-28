import { LightningElement } from 'lwc';

export default class Bmi extends LightningElement {
    height;
    weight;
    bmi;

    enteredHeight(event){
        this.height = parseFloat(event.target.value);
    }

    enteredWeight(event){
        this.weight = parseFloat(event.target.value);
    }

    CalculateBMI(){
        this.bmi = this.weight/(this.height * this.height );
    }

    get bmiValue(){
        return `The BMI is: ${this.bmi}`;
    }
}