import { Component, OnInit } from '@angular/core';
import { User } from './user';

// export interface User {
//   id: number;
//   name: string;
//   email: string;
// }

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' },
    { id: 4, name: 'Alice Smith', email: 'alice.smith@example.com' },
  ];

  selectedUser: User = {
    id: 0,
    name: '',
    email: '',
  };

  addUser(): void {
    this.selectedUser.id = this.users.length + 1;
    this.users.push(this.selectedUser);
    this.selectedUser = {
      id: 0,
      name: '',
      email: '',
    };
  }

  deleteUser(user: User): void {
    this.users = this.users.filter(u => u !== user);
  }

  updateUser(): void {
    this.selectedUser = {
      id: 0,
      name: '',
      email: '',
    };
  }

  editUser(user: User): void {
    this.selectedUser = user;
  }
}
