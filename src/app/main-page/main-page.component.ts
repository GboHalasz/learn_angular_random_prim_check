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
    this.found = primes.length > 0;
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
  primeResult: CountPrimes | null = null;
  isCheckEnabled: boolean = false;

  onGenerateClick() {
    this.generatedNums = this.generateNumbers(10)
    this.primeResult = null;
    this.isCheckEnabled = true;
  }

  onCheckClick() {
    this.primeResult = this.countPrimes();
    this.isCheckEnabled = false;
  }

  private generateNumbers(quantity: number): number[] {
    const result: number[] = [];
    while (result.length < quantity) {
      const randInt: number = this.getRandomInt(4, 5000)
      if (!result.includes(randInt)) {
        result.push(randInt);
      }
    }
    return result;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

  countPrimes(): CountPrimes {
    const primes = this.generatedNums.filter((num) => this.isPrime(num))
    return new CountPrimes(primes);
  }
}
