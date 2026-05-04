import { Component } from '@angular/core';

type Order = {
    id: number;
    petId: number;
    petName: string;
    quantity: number;
    status: "delivered" | "approved" | "placed";
    shipDate: string;
    customer: string;
};

@Component({
  selector: 'app-orders',
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
  standalone: true
})

export class Orders {
    protected readonly orders: Order[] = [
        {id:1001,petId:5,petName:'Rex',quantity:1,status:'delivered',shipDate:'2025-04-10',customer:'Alice M.'},
        {id:1002,petId:3,petName:'Tweety',quantity:1,status:'approved',shipDate:'2025-04-18',customer:'Bob K.'},
        {id:1003,petId:7,petName:'Nibbles',quantity:2,status:'placed',shipDate:'2025-04-22',customer:'Carol S.'},
        {id:1004,petId:1,petName:'Buddy',quantity:1,status:'placed',shipDate:'2025-04-23',customer:'Dave L.'},
        {id:1005,petId:6,petName:'Luna',quantity:1,status:'approved',shipDate:'2025-04-21',customer:'Eve P.'},
    ]
};
