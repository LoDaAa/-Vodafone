import { Component, OnInit } from '@angular/core';
import data from '../../../assets/contacts.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  dataList = data
  letters = []
  activeLetter : null
  searchContact: string

  
  constructor() { }

  ngOnInit(): void {

    //looping through the data and pushing letters to the list and sorting

      this.dataList.forEach(x => {
        if(this.letters.indexOf(x.name.charAt(0)) === -1)
        {
          this.letters.push(x.name[0])

        }
      })
      this.letters.sort()
  }

  //toggeling way and filtering the data according to letter passed to the function

  letterClicked(letter, index) {
    if (this.activeLetter == index) {
      this.activeLetter = null;
      this.dataList = data
    } 
    else {
      this.activeLetter = index;  
      this.dataList = data.filter(result => result.name[0] === letter)
      }
  }

}