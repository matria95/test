import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'test';
  USERS_LIMIT!: number;
  USER_SKIP: number = 15;
  USER_TOTAL: number = 100;
  users: User[] = [];
  pages: number[] = [];

  constructor(
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.USERS_LIMIT == this.USER_SKIP;
    this.USERS_LIMIT = Math.ceil(this.USER_TOTAL / this.USER_SKIP);
    this.pages = Array.from(Array(this.USERS_LIMIT).keys());
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.getUsers(this.USER_SKIP, this.USER_SKIP * (queryParams['page'] - 1));
      //console.log(queryParams);
    });
  }

  getUsers(USER_SKIP: number, userSkip: number) {
    this.userService.loadUsers(USER_SKIP, userSkip).subscribe(
      (res) => {
        console.log('Users', res);
        this.users = res.users;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  goUsersByPage(p: number) {
    this.router.navigate(['/users'], { queryParams: { page: p } });
  }

  goToUserDetail(id: number) {
    this.router.navigateByUrl('/user/' + id);
  }
}
