import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  generatedNums: number[] = [];


  onGenerateClick() {
    this.generateNumbers(10)
    this.displayGeneratedNumbers(this.generatedNums);
    this.enableCheckBtn();
  }

  onCheckClick() {

  }

  generateNumbers(quantity: number): void {
    this.generatedNums = [];
    for (let i: number = 0; i < quantity; i++) {
      const randInt: number = Math.floor((Math.random() * 4997) + 4);
      this.generatedNums.push(randInt);
    }
  }

  countPrimes(): any {
    const primNums: number[] = this.generatedNums.filter((num) => {
      if (num <= 1) {
        return false;
      }

      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    })

    const obj: any = {
      primes: primNums,
      count: primNums?.length,
      dateTime: new Date,
      found: primNums.length < 0 ? true : false
    }



  }

  displayGeneratedNumbers(nums: number[]) {
    console.log(nums);
    let holder = document.getElementById("disp");
    while (holder?.firstChild) {
      holder.removeChild(holder.firstChild)
    }

    let titleHolder: HTMLElement = document.createElement("h2");
    let title: Text = document.createTextNode("A generált számok:");

    titleHolder.appendChild(title);
    holder?.appendChild(titleHolder);
    let numsinHTML: Text = document.createTextNode(nums.join(", "))

    holder?.appendChild(numsinHTML);
  }

  enableCheckBtn() {
    const checkBtn = document.getElementById("checkBtn");
    checkBtn?.classList.remove("disabled");
  }

  disableCheckBtn() {
    const checkBtn = document.getElementById("checkBtn")
    checkBtn?.classList.add("disabled");
  }


}
