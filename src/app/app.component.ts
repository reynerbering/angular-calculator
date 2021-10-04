import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';

  usrInput1  = 0;
  usrInput2  = 0;
  result = 0;


  num1(value : any){
    this.usrInput1 = parseInt(value);
    console.log(this.usrInput1);
  }
  num2(value : any){
    this.usrInput2 = parseInt(value);
    console.log(this.usrInput2);
    
    
  }
  onClickAdd(){
    this.result = (this.usrInput1 + this.usrInput2);
    let resultOutput = document.getElementById("result") as HTMLInputElement;
    resultOutput.valueAsNumber = this.result;
  }
  onClickSubtract(){
    this.result = (this.usrInput1 - this.usrInput2);
    let resultOutput = document.getElementById("result") as HTMLInputElement;
    resultOutput.valueAsNumber = this.result;
  }
  onClickMultiply(){
    this.result = (this.usrInput1 * this.usrInput2);
    let resultOutput = document.getElementById("result") as HTMLInputElement;
    resultOutput.valueAsNumber = this.result;
  }
  onClickDivide(){
    this.result = (this.usrInput1 / this.usrInput2);
    let resultOutput = document.getElementById("result") as HTMLInputElement;
    resultOutput.valueAsNumber = this.result;
  }
  }