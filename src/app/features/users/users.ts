import { Component } from '@angular/core';

type User = {
  id: number;
  username: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  status: 'active' | 'inactive';
};

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  protected readonly users: User[] = [
    {
      id: 1,
      username: 'johndoe',
      fullName: 'John Doe',
      email: 'john@petstore.io',
      phone: '+1-555-0101',
      role: 'Admin',
      status: 'active',
    },
    {
      id: 2,
      username: 'alice.moss',
      fullName: 'Alice Moss',
      email: 'alice@petstore.io',
      phone: '+1-555-0102',
      role: 'Staff',
      status: 'active',
    },
    {
      id: 3,
      username: 'bob.kane',
      fullName: 'Bob Kane',
      email: 'bob@petstore.io',
      phone: '+1-555-0103',
      role: 'Staff',
      status: 'inactive',
    },
    {
      id: 4,
      username: 'carol.smith',
      fullName: 'Carol Smith',
      email: 'carol@petstore.io',
      phone: '+1-555-0104',
      role: 'Customer',
      status: 'active',
    },
    {
      id: 5,
      username: 'dave.lee',
      fullName: 'Dave Lee',
      email: 'dave@petstore.io',
      phone: '+1-555-0105',
      role: 'Customer',
      status: 'active',
    },
  ];

}

// To be deleted later, after we decide if we keep new or old user list format
// export class Users {
//     protected readonly users: User[] = [
//         {id:1,username:'johndoe',firstName:'John',lastName:'Doe',email:'john@petstore.io',phone:'+1-555-0101',userStatus:1,role:'Admin'},
//         {id:2,username:'alicemoss',firstName:'Alice',lastName:'Moss',email:'alice@petstore.io',phone:'+1-555-0102',userStatus:1,role:'Staff'},
//         {id:3,username:'bobkane',firstName:'Bob',lastName:'Kane',email:'bob@petstore.io',phone:'+1-555-0103',userStatus:0,role:'Staff'},
//         {id:4,username:'carolsmith',firstName:'Carol',lastName:'Smith',email:'carol@petstore.io',phone:'+1-555-0104',userStatus:1,role:'Customer'},
//         {id:5,username:'davelee',firstName:'Dave',lastName:'Lee',email:'dave@petstore.io',phone:'+1-555-0105',userStatus:1,role:'Customer'},
//     ]
// }
