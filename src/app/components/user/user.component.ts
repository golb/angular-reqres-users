import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ReqresService } from 'src/app/services/reqres.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId: number;
  users: User[] = [];
  user: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    private reqresService: ReqresService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.userId = params.userId;
      });

      this.activatedRoute.paramMap.pipe(
        map(() => window.history.state)
      ).subscribe(
        data => {
          if (data.hasOwnProperty('id')) {
            this.users.push(data);
          } else {
            this.reqresService.getUser(this.userId).subscribe(
                data => this.users.push(data)
              );
          }
        }
      );
  }

}
