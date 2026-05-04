import { Component } from '@angular/core';

type Pet = {
    id: number;
    name: string;
    category: string;
    status: "available" | "pending" | "sold";
    emoji: string;
    tags: string[];
    photos: number;
};


@Component({
  selector: 'app-pets',
  templateUrl: './pets.html',
  styleUrl: './pets.scss',
  standalone: true
})

export class Pets {
  protected readonly pets: Pet[] = [
    {id:1,name:'Buddy',category:'Dogs',status:'available',emoji:'🐕',tags:['playful','trained'],photos:2},
    {id:2,name:'Whiskers',category:'Cats',status:'available',emoji:'🐈',tags:['indoor','calm'],photos:1},
    {id:3,name:'Tweety',category:'Birds',status:'pending',emoji:'🦜',tags:['vocal','colorful'],photos:1},
    {id:4,name:'Nemo',category:'Fish',status:'available',emoji:'🐠',tags:['tropical','tank'],photos:0},
    {id:5,name:'Rex',category:'Dogs',status:'sold',emoji:'🐶',tags:['large','guard'],photos:3},
    {id:6,name:'Luna',category:'Cats',status:'available',emoji:'😺',tags:['outdoor','hunter'],photos:2},
    {id:7,name:'Nibbles',category:'Rabbits',status:'pending',emoji:'🐇',tags:['small','gentle'],photos:1},
    {id:8,name:'Goldie',category:'Fish',status:'available',emoji:'🐡',tags:['goldfish','easy'],photos:0},
    {id:9,name:'Max',category:'Dogs',status:'available',emoji:'🦮',tags:['labrador','friendly'],photos:2}
  ];
};
