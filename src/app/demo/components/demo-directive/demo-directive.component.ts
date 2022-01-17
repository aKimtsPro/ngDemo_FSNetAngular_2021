import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent implements OnInit {

  inputColor: any;
  inputValid: string= '';

  textShow: boolean = false;
  personnes = [
    {
      nom: "Luc",
      age: 50
    },
    {
      nom: "Marie",
      age: 38
    },
    {
      nom: "Dominique",
      age: 15
    }
  ]

  menuSelect: string = "pizza";

  constructor() { }

  ngOnInit(): void {
  }

  isValid(){
    return this.inputValid.length >= 5 && this.inputValid.length <= 20
  }

  toggleTextShow(){
    this.textShow = !this.textShow;
  }

  addPers(){
    this.personnes.push({
      nom: this.inputValid,
      age: 40
    })
  }

  removePers(index: number){
    this.personnes.splice(index,1)
  }

}
