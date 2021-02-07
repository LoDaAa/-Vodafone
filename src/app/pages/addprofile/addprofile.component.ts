import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../../assets/contacts.json';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.scss']
})
export class AddprofileComponent implements OnInit {

  
  constructor(private router : Router) { }

  dataList = data
  Employee = {name : "", email : "", phone : ""}
  success = false
  dt = new Date();
  date : number

  ngOnInit(): void {
    this.date = this.dt.getFullYear()
  }

  //the object which has the data added would be pushed to the existing dataList

  addContact(){
    console.log(this.Employee)
    this.success = true
    this.dataList.push(this.Employee);
    setTimeout(()=>{  
      this.router.navigate(['/'])
    }, 1000);
  }

}
