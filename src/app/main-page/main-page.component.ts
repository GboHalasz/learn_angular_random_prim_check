import { Component } from '@angular/core';

export class CountPrimes {
  primes: number[];
  count: number;
  dateTime: any;
  found: boolean;

  constructor(primes: number[]) {
    this.primes = primes;
    this.count = primes.length;
    this.dateTime = new Date;
    this.found = primes.length > 0 ? true : false;
  }
}


@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
    standalone: false
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
    while (this.generatedNums.length < quantity) {
      const randInt: number = Math.floor((Math.random() * 17) + 4);
      if (!this.generatedNums.includes(randInt)) {
        this.generatedNums.push(randInt);
      }
    }
  }

  isPrime(numb: number): boolean {
    if (numb <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(numb); i++) {
      if (numb % i === 0) {
        return false;
      }
    }
    return true;
  }

  countPrimes(): any {
    const primNums: number[] = this.generatedNums.filter((num) => this.isPrime(num))

    return new CountPrimes(primNums);;
  }

  private displayGeneratedNumbers(nums: number[]) {
    console.log(nums);

    let titleHolder: HTMLElement = document.createElement("h2");
    let title: Text = document.createTextNode("A generált számok:");

    titleHolder.appendChild(title);

    let numsinHTML: Text = document.createTextNode(nums.join(", "))

    this.genNumsHolder?.appendChild(titleHolder);
    this.genNumsHolder?.appendChild(numsinHTML);
  }

  private displayPrimes(primes: CountPrimes) {
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

  private disableCheckBtn() {
    const checkBtn = document.getElementById("checkBtn")
    checkBtn?.classList.add("disabled");
  }

  private removeHTMLcontent(holder: any) {
    while (holder.firstChild) {
      holder.removeChild(holder.firstChild)
    }
  }
}
