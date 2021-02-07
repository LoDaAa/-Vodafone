import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  dt = new Date();
  date : number
  
   

  constructor() { }

  ngOnInit(): void {
    this.date = this.dt.getFullYear()
  }

}
