import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

 function comparePassword (c: AbstractControl) {
   const v = c.value ;
   return(v.password === v.confirmPassword) ? null : {
     passwordnotmatch : true
   };

 }
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
 registerForm: FormGroup;
 constructor(private fb: FormBuilder) { }

  ngOnInit() {
   this.registerForm = this.fb.group({
     email: ['', [Validators.required, Validators.email]],
     pwGroup : this.fb.group({
       password : ['', [Validators.required , Validators.minLength(6) ]],
       confirmpassword : ['', [Validators.required , Validators .minLength( 6)]]

    } , {vadilator : comparePassword}),
     country : ['' , [Validators.required ]],
     age : ['' , [Validators.required , Validators.min(18)]],
     gender : ['', [Validators.required ]],
     phone : ['' , [Validators.required , Validators.pattern(/^\+ 84\d{8,9}$/)]]
   });
   this.registerForm.patchValue({
     email : 'infor@tienluu.gmail.com'
   });
 }
onSubmit() {
 console.log(this.registerForm);
}

}
