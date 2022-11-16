import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';
import { checkpassValidator } from './checkpass';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  newForm = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.email],
      gender: ['other'],
      password: ['', Validators.required],

      confermaPass: ['', Validators.required],
    },
    { validators: checkpassValidator }
  );

  user: User[] = [];

  constructor(private fb: FormBuilder, private userService: UsersService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService
      .postUser({
        firstName: this.newForm.controls['firstName'].value,
        lastName: this.newForm.controls['lastName'].value,
        username: this.newForm.controls['username'].value,
        gender: this.newForm.controls['gender'].value,
        email: this.newForm.controls['email'].value,
        password: this.newForm.controls['password'].value,
      })
      .subscribe(
        (res) => {
          console.log('User', res);
          this.user = res.users;
        },
        (err) => {
          console.log(err);
        }
      );

    console.log(this.newForm.value);
  }
}
