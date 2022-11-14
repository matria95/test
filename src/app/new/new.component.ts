import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  newForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.email],
    gender: ['other'],
    password: ['', Validators.minLength(6)],
    confermaPass: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  checkPw() {
    let password = this.newForm.controls['password'].value;
    let confermaPass = this.newForm.controls['confermaPass'].value;
    if (!(password == confermaPass)) {
      this.newForm.controls['password'].setErrors({ incorrect: true });
    } else {
      this.newForm.controls['password'].setErrors(null);
    }
  }

  onSubmit() {
    console.log(this.newForm.value);
  }
}
