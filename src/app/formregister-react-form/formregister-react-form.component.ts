import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , FormArray } from '@angular/forms';
import { Validators  } from '@angular/forms';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formregister-react-form',
  templateUrl: './formregister-react-form.component.html',
  styleUrls: ['./formregister-react-form.component.scss']
})
export class FormregisterReactFormComponent implements OnInit {
  registerForm : FormGroup;

  faPencilAlt = faPencilAlt;
  faTimes = faTimes;

  user = {
      secret: '',
      userData: {
          email: '',
          fullName: '',
          sex: '',
          username: '',
      },
      hobbies: []
  };
  submitted = false;

  constructor(){}

  /*Reactive Form อีกแบบใช้ formBuilder*/
  // constructor(private formBuilder: FormBuilder) {
  //   this.createContactForm();
  // }
  // createContactForm(){
  //   this.registerForm = this.formBuilder.group({
  //     secret: [''],
  //     email: [''],
  //     fullName: [''],
  //     sex: ['Male'],
  //     username: ['']
  //   });
  // }

  ngOnInit() {
    this.registerForm = new FormGroup({
        'userData': new FormGroup({
            'email': new FormControl(null, [
                     Validators.required,
                     Validators.email]),
            'fullName': new FormControl(null, Validators.required),
            'sex': new FormControl('Male'),
            'username': new FormControl(null, Validators.required)
        }),
        'secret': new FormControl('car'),
        'hobbies': new FormArray([])
    });

    this.onAddHobby();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.registerForm.get('hobbies')).push(control);
  }

  getHobbies() {
    return (<FormArray>this.registerForm.get('hobbies')).controls;
  }

  onSubmit() {
    this.submitted = true;

    const userData = this.user.userData;
    const registerForm = this.registerForm.value;

    this.user.secret = registerForm.secret;
    this.user.hobbies = registerForm.hobbies;
    userData.email = registerForm.userData.email;
    userData.fullName = registerForm.userData.fullName;
    userData.sex = registerForm.userData.sex;
    userData.username = registerForm.userData.username;

    //console.log(this.registerForm);
    this.onReset();
    this.onAddHobby();
  }

  onReset() {
    this.registerForm.reset();
    this.registerForm.patchValue({
        userData: {
            sex: 'Male'
        },
        secret: 'car'
    });
    const x = <FormArray>this.registerForm.controls.hobbies;
    x.controls = [];
  }

  suggestUserName () {
    const suggestedName = 'Doraemon';
    this.registerForm.patchValue({
        userData: {
            username: suggestedName
        }
    });
  }

}
