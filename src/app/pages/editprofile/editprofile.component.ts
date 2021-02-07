import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import data from '../../../assets/contacts.json';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  dataList  = data
  userId : string
  EditedData : any
  success = false

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {    
    this.route.params.subscribe((params : Params) =>{
        this.userId = params.id
        this.EditedData = {
          name : this.dataList[this.userId].name,
          email : this.dataList[this.userId].email,
          phone : this.dataList[this.userId].phone
        }
     })
  }

  //Assigning the edited data to the existing data

  saveContact(){
    this.dataList[this.userId].name = this.EditedData.name
    this.dataList[this.userId].email = this.EditedData.email
    this.dataList[this.userId].phone = this.EditedData.phone
    this.success = true
    setTimeout(()=>{  
      this.router.navigate(['/'])
    }, 1000); 
  }
  
}
