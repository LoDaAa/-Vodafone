import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import data from '../../../assets/contacts.json';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  modalRef: BsModalRef;
  dataList = data
  userId : number
  deleted = false

  constructor(private route : ActivatedRoute, private router : Router, private modalService: BsModalService) { }

  ngOnInit(): void {
    // Getting the paramater in which it would express a specific profile
    this.route.params.subscribe((params : Params) =>{
        this.userId = params.id
     })
  }

  // when executed it would show the modal 
  //and applying class to the template which is a reference to the modal that would be shown

  deleteContact(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }

  // when executed it would hide the modal, delete and navigate to the home page.

  confirm(): void {
    this.modalRef.hide();
    this.deleted = true
    this.dataList.splice(this.userId, 1);
    this.router.navigate(['/'])
  }

  // when executed it would just hide the modal.

  decline(): void {
    this.modalRef.hide();
  }

}
