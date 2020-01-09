import { Component, OnInit , ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formregister',
  templateUrl: './formregister.component.html',
  styleUrls: ['./formregister.component.css']
})
export class FormregisterComponent implements OnInit {
  @ViewChild('f', {static: true}) registerForm: NgForm;

  faPencilAlt = faPencilAlt;

  defaultSex = 'Male';
  defaultSecret = 'pet';

  user = {
      secret: '',
      userData: {
          email: '',
          fullName: '',
          sex: '',
          username: '',
      }
  };
  submitted = false;

  constructor() {
  }

  ngOnInit() {
  }

  /**
  onSubmit(form: NgForm) {
      console.log(this.registerForm);
      //console.log(form);     //กรณีส่ง ชื่อ form เข้ามาเลย  >>.html (ngSubmit)="onSubmit(f)" #f="ngForm"
  }
  **/

  suggestUserName () {
      const suggestedName = 'Superuser';
      // this.registerForm.setValue({
      //     secret: 'car',
      //     userData: {
      //         email: '',
      //         fullName: '',
      //         sex: 'Male',
      //         username: suggestedName,
      //     }
      // });

      this.registerForm.form.patchValue({
          userData: {
              username: suggestedName
          }
      });

/**
    ทั้ง 2 คำสั่งนี้ต่างกันตรงที่....
    // เซ็ตค่าให้กับทุก element >> ngModel >> ทุกตัว
    this.registerForm.setValue({});
    // เซ็ตค่าให้กับบาง element >> ngModel >> บางตัว
    this.registerForm.form.patchValue({});
    ***โดยใช้วิธีการเข้าถึงฟอร์มด้วย @ViewChild
**/
  }

  setDafaultValue(){
    const defaultSex = 'Male';
    const defaultSecret = 'pet';

    this.registerForm.form.patchValue({
        secret : defaultSecret ,
        userData: {
            sex: defaultSex
        }
    });
  }

  onSubmit() {
      this.submitted = true;

      const userData = this.user.userData;
      const registerForm = this.registerForm.value;

      this.user.secret = registerForm.secret;
      userData.email = registerForm.userData.email;
      userData.fullName = registerForm.userData.fullName;
      userData.sex = registerForm.userData.sex;
      userData.username = registerForm.userData.username;

      this.registerForm.resetForm();

      this.setDafaultValue()
  }

}
