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
ngOnInit(){
  console.log(this.generateNumbers(10));
}


displayGeneratedNumbers(){}


}
