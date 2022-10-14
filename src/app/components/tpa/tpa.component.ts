import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/IUser';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-tpa',
  templateUrl: './tpa.component.html',
  styleUrls: ['./tpa.component.css']
})
export class TpaComponent implements OnInit {
  users$!: IUser[];
  constructor(public userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    });
  }

}
