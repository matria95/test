import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
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
      email: ['', Validators.compose([Validators.required, Validators.email])],
      gender: [''],
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
        firstName: this.newForm.value['firstName'],
        lastName: this.newForm.value['lastName'],
        username: this.newForm.value['username'],
        gender: this.newForm.value['gender'],
        password: this.newForm.value['password'],
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
