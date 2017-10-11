import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';

@Component ({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .then(users => {
		var byName = users.slice(0);
		byName.sort(function(a,b){
			var x = a.name.toLowerCase();
			var y = b.name.toLowerCase();
			return x < y ? -1 : x > y ? 1 : 0;
		});
		this.users = byName;
	  });
  }
}
