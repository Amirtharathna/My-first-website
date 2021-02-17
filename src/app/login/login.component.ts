import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { forbiddenNameValidator } from './firstname.validator';
//import { CrudService } from './crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = true;
  // condition=""; 
  condition = true;
  push: any;
  items: any = [];
  item: any;
  reqno: any;
  constructor(private fb: FormBuilder, private _crudService: CrudService, private router: Router) {

  }

  public loginForm: FormGroup = this.fb.group({
    stu_id:[''],
    firstname: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    regno: ['', [Validators.required]],
    department: ['', Validators.required],
    year: ['', Validators.required],
    dob: ['', Validators.required],
    doorno: ['', Validators.required],
    area: ['', Validators.required],
    place: ['', Validators.required],
    pincode: ['', Validators.required],
    agree: ['', Validators.required]


  });
  ngOnInit(): void {
    if (this._crudService.isEdit == true) {
      const item = this._crudService.editStudent as any;
      console.log(item);
      this.loginForm.setValue({
        stu_id:item.stu_id,firstname: item.firstname, lastname: item.lastname, regno: item.regno, department: item.department, year: item.year, dob: item.dob, doorno:item.address?.doorno,
        area: item.address?.area, place: item.address?.place, pincode: item.address?.pincode, agree: true
      })
      this.isUpdate = this._crudService.isEdit;

    }
    //this.isUpdate=this._crudService.isEdit;
    setTimeout(() => {
      this.isLoading=false;
    }, 1000);
  }
  isUpdate = false;

  onSubmit() {
   this.isLoading=true;
    //this.router.navigateByUrl('grid');
    console.log(this.loginForm.value);
    if (this.isUpdate == false) {
      this.postLogin()
    } else {
      this.putLogin()
    }
  }

  showGrid() {   this.isLoading=true;

    this.router.navigateByUrl('grid');
    //this.getLogin();

  }
  show() {
    this.condition = true;
  }
  reset() {
    this.loginForm.reset();
    this.isUpdate = false;
  }

  getLogin() {
    this._crudService.getLogin().subscribe(data => {
      this.items = data as any
    }
      , error => error);

  }

  postLogin() {
    const FormValue = this.loginForm.value;
    const payLoad = {
      firstname: FormValue.firstname, lastname: FormValue.lastname, regno: FormValue.regno, department: FormValue.department, year: FormValue.year,
      dob: FormValue.dob, address: { street: FormValue.doorno, area: FormValue.area, place: FormValue.place, pincode: FormValue.pincode }
    }
    this._crudService.postLogin(payLoad).subscribe(data => {
this.isLoading=false;
      this.reset();
      // this.getLogin();
      this.showGrid();

    })
  }
  putLogin(item?: any) {

    const FormValue = this.loginForm.value;
    const payLoad = {
      stu_id:FormValue.stu_id,firstname: FormValue.firstname, lastname: FormValue.lastname, regno: FormValue.regno, department: FormValue.department, year: FormValue.year,
      dob: FormValue.dob, address: { street: FormValue.doorno, area: FormValue.area, place: FormValue.place, pincode: FormValue.pincode }
    }
    this._crudService.putLogin(payLoad).subscribe(data => {
      this.isLoading=false;
      this.reset();
      //this.getLogin();
      this.showGrid();
    })

  }
  /*Edit(item: any) {
    console.log(item);
    this.show();
    this.isUpdate = true;
    this.loginForm.setValue({
      firstname: item.firstname, lastname: item.lastname, regno: item.regno, department: item.department, year: item.year, dob: item.dob, doorno: item.address.street,
      area: item.address.area, place: item.address.place, pincode: item.address.pincode, agree: true
    })
  }*/


  delete() {

    if (confirm("Are you sure")) {
      this._crudService.deleteEntry(this._crudService.editStudent?.stu_id as any).subscribe(data=>{
        this.reset();

      })

    }

  }
}




