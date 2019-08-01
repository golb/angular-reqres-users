import { Component, OnInit } from '@angular/core';
import { ReqresService } from 'src/app/services/reqres.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  currentPage: number = 1;

  constructor(private reqresService: ReqresService) { }

  ngOnInit() {
    this.reqresService.getUsers().subscribe(
      data => this.users = data,
      err => {
        console.log('err in API', err);
      }
    )
  }

  goPage(page: number) {
    this.reqresService.getUsers(page).subscribe(
      data => {
        this.users = data;
        this.currentPage = page;
      },
      err => {
        console.log('err in API', err);
      }
    )
  }

}
