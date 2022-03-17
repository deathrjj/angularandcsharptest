import { Component } from '@angular/core';

interface CalculatorButton { 
  label: string;
  value: number | CalculatorOperation;
}

enum CalculatorOperation {
  Sqrt = 'sqrt',
  Divide = '/',
  Percent = 'percent',
  Multiply = '*',
  CE = 'ce',
  Minus = '-',
  C = 'c',
  Decimal = '.',
  Equals = '=',
  Plus = '+'
}


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  value: number = 0;
  accumulator: number = 0;
  currentOperation: CalculatorOperation | null = null;

  callstack: Array<number | CalculatorOperation> = [0];

  lastNumberStartIndex: number | null = null;

  buttons : CalculatorButton[] = [
    { label: '√',value:CalculatorOperation.Sqrt},
    { label: '7',value:7},
    { label: '8',value:8},
    { label: '9',value:9},
    { label: '÷',value:CalculatorOperation.Divide},
    {label: '%',value:CalculatorOperation.Percent},
    {label: '4',value:4},
    {label: '5',value:5},
    {label: '6',value:6},
    {label: '×',value:CalculatorOperation.Multiply},
    {label: 'CE',value:CalculatorOperation.CE},
    {label: '1',value: 1 },
    {label: '2',value: 2 },
    {label: '3',value: 3 },
    {label: '-',value:CalculatorOperation.Minus},
    {label: 'C',value:CalculatorOperation.C},
    {label: '0',value: 0},
    {label: '.',value:CalculatorOperation.Decimal},
    {label: '=',value:CalculatorOperation.Equals},
    {label: '+',value:CalculatorOperation.Plus},
  ]; 

  onButtonClicked(value: number | CalculatorOperation) {
    // console.log(value);

    this.updateCallstack(value);
    
    // if(typeof value === 'number') {
    //   //if last button pressed !number clear value
    //   this.value+=value;
    // } else {
    //   // CalculatorOperation
    //   // On operation:
    //   // calculate
    //   // Save to ACC
    //   // Clear value 
    //   // Save button thing as current operation
    //   // 
      
    //   switch (value) {
    //     case CalculatorOperation.Sqrt: {
    //       const res = Math.sqrt(Number(this.value));
    //       this.value = res.toString();
    //       break;
    //     }
    //     case CalculatorOperation.Percent:{
    //       const res = Number(this.value)/100
    //       this.value = res.toString();
    //       break;
    //     }
    //     case CalculatorOperation.CE:{
    //       this.value = "";
    //       break;
    //     }
    //     case CalculatorOperation.C:{
    //       this.value = "";
    //       this.accumulator = 0;
    //       break;
    //     }
    //     case CalculatorOperation.Plus:{
    //       this.currentOperation = CalculatorOperation.Plus;
    //     }


    //   } 
      
    // }

    // console.log(this.accumulator, this.currentOperation);
  }

  private updateCallstack(value: number | CalculatorOperation): void {
    if(typeof value !== 'number') {
      switch (value) {
        case CalculatorOperation.Sqrt: {
          const currentNumber = this.getCurrentNumber();
          const res = Math.sqrt(currentNumber);
          this.callstack = [...this.callstack.slice(0, this.lastNumberStartIndex ?? 0), res];
          break;
        }
        case CalculatorOperation.Percent: {
          const currentNumber = this.getCurrentNumber();
          const res = currentNumber/100;
          this.callstack = [...this.callstack.slice(0, this.lastNumberStartIndex ?? 0), res];
          break;
        }
        case CalculatorOperation.Equals: {
          const expression = this.callstack.join('');
          const res = eval(expression);
          console.log(res);
          this.callstack = [res];
          this.value = res;
          break;
        } 
        case CalculatorOperation.C:{
          this.callstack=[0]
          this.value=0
          break;
        }
        case CalculatorOperation.CE:{
          this.callstack = this.callstack.slice(0, this.lastNumberStartIndex ?? 0);
          this.value=0;
          break;
        }
        default: {
          const expression = this.callstack.join('');
          const res = eval(expression);
          console.log(res);
          this.callstack = [res];
          this.value = res;
          this.callstack.push(value);
          console.log(this.callstack);
          break;
        }
      }
    } else {
      if(this.callstack.length === 1 && this.callstack[0] === 0) {
        this.callstack = [];
      }

      if(typeof this.callstack[this.callstack.length - 1] !== 'number') {
        this.lastNumberStartIndex = this.callstack.length;
      }


      this.callstack.push(value);
      console.log(this.callstack);

      this.value = this.getCurrentNumber();
    }
  }

  private getCurrentNumber(): number {
    return Number(this.callstack.slice(this.lastNumberStartIndex ?? 0).join(''));
  }
}
