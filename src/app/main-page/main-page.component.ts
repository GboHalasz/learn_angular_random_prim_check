import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

generateNumbers(quantity:number):number[] {
  const nums:number[] = [];  
  for (let i:number= 0; i < quantity; i++) {
    const randInt:number = Math.floor((Math.random() * 4997) + 4);
    nums.push(randInt);
  }
  return nums;
}

displayGeneratedNumbers(nums:number[]){
  console.log(nums);
  let titleHolder: HTMLElement = document.createElement("h2");
  let title: Text = document.createTextNode("A generált számok:");
  let holder = document.getElementById("disp");
  titleHolder.appendChild(title);
  holder?.appendChild(titleHolder);
  let numsinHTML: Text = document.createTextNode(nums.join(", "))
  
  holder?.appendChild(numsinHTML);
  
}


}
