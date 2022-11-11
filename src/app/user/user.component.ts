import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  idUser!: number;
  user!: any;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idUser = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.getUser(this.idUser);
  }

  getUser(idUser: number) {
    this.usersService.getSingleUser(idUser).subscribe(
      (res) => {
        console.log('SingleUser', res);
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
