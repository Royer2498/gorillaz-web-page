import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../Services/ItemsService';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  clothes=[];
  constructor(itemsService:ItemsService) { 
    this.clothes = itemsService.getItems();
  }

  ngOnInit() {
  }

}
