import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { User }              from './user';
import { UserService }       from './user.service';
@Component({
  moduleId: module.id,
  selector: 'my-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;
  constructor(
	private userService: UserService, 
	private router: Router) { }
  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }
  ngOnInit(): void {
    this.getUsers();
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  gotoDetail(): void {
	this.router.navigate(['/detail', this.selectedUser.id]);
  }
}
