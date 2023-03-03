import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  generatedNums: number[] = [];
  genNumsHolder: any;
  primesHolder: any;

  ngOnInit() {
    this.primesHolder = document.getElementById("dispPrimes");
    this.genNumsHolder = document.getElementById("dispGenNums");
  }

  onGenerateClick() {
    this.removeHTMLcontent(this.primesHolder)
    this.removeHTMLcontent(this.genNumsHolder)
    this.generateNumbers(10)
    this.displayGeneratedNumbers(this.generatedNums);
    this.enableCheckBtn();
  }

  onCheckClick() {
    this.displayPrimes(this.countPrimes());
    this.disableCheckBtn()
  }

  generateNumbers(quantity: number): void {
    this.generatedNums = [];
    for (let i: number = 0; i < quantity; i++) {
      const randInt: number = Math.floor((Math.random() * 17) + 4);
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
      found: primNums.length > 0 ? true : false
    }
    return obj;
  }

  displayGeneratedNumbers(nums: number[]) {
    console.log(nums);
    
    let titleHolder: HTMLElement = document.createElement("h2");
    let title: Text = document.createTextNode("A generált számok:");

    titleHolder.appendChild(title);
    
    let numsinHTML: Text = document.createTextNode(nums.join(", "))

    this.genNumsHolder?.appendChild(titleHolder);
    this.genNumsHolder?.appendChild(numsinHTML);
  }

  displayPrimes(primes: any) {
    console.log(primes);    
   
    let titleHolder: HTMLElement = document.createElement("h2");
    let title: Text = document.createTextNode(`${primes.found ? "Találat!" : "Nincs találat!"}`);
    titleHolder.appendChild(title);
    
    this.primesHolder.appendChild(titleHolder);

    if (primes.found) {
      let numsinHTML: Text = document.createTextNode(primes.primes.join(", "))
      this.primesHolder.appendChild(numsinHTML);
    }
  }

  private enableCheckBtn() {
    const checkBtn = document.getElementById("checkBtn");
    checkBtn?.classList.remove("disabled");
  }

  disableCheckBtn() {
    const checkBtn = document.getElementById("checkBtn")
    checkBtn?.classList.add("disabled");
  }

  removeHTMLcontent(holder: any) {
    while (holder.firstChild) {
      holder.removeChild(holder.firstChild)
    }
  }
}
