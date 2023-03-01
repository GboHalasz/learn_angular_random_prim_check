import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  onGenerateClick() {
    this.displayGeneratedNumbers(this.generateNumbers(10));
    this.enableCheckBtn();
  }

  generateNumbers(quantity: number): number[] {
    const nums: number[] = [];
    for (let i: number = 0; i < quantity; i++) {
      const randInt: number = Math.floor((Math.random() * 4997) + 4);
      nums.push(randInt);
    }
    return nums;
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
