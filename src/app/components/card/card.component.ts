import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() users: User[];
  @Input() isDetails: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  trackByUsers(index: number, user: User): number {
    return user.id;
  }

}
