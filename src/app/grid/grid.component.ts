import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
 //condition = true;
  push: any;
  items: any = [];
  item: any;
  sid: any;
  isUpdate: boolean | undefined;
  loginForm: any;
  condition: boolean | undefined;
 // isUpdate=false;
isLoading=true;
  constructor(private fb: FormBuilder, private _crudService: CrudService,private router:Router) { }

  ngOnInit(): void {
    this.getLogin();
    this._crudService.isEdit=false;
  }
  
  show() {
    this.router.navigateByUrl('login');
   //this.condition = true;
  }

  getLogin() {
    this._crudService.getLogin().subscribe(data => {
      this.items = data as any
      setTimeout(()=>this.isLoading=false,3000)
    }
      , error => error);

  }
  Edit(item: any) {
    console.log(item);
    this._crudService.isEdit=true;
    //this.isUpdate = true;
    this._crudService.editStudent={
      stu_id:item.stu_id,firstname: item.firstname, lastname: item.lastname, regno: item.regno, department: item.department, year: item.year, dob: item.dob, 
      address:{doorno: item.address.street,
      area: item.address.area, place: item.address.place, pincode: item.address.pincode}, agree: true
    }    
    this.show();

}

deleteEntry(stu_id:number) {
  if (confirm("Are you sure")) {
    this._crudService.deleteEntry(stu_id).subscribe(data => this.getLogin())

  }

}
}