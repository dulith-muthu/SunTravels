import { Component, OnInit } from '@angular/core';
import {Hotel} from '../../../data-models/hotel';
import {Router} from '@angular/router';
import {HotelService} from '../../../services/hotel-service';
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.sass']
})
export class HotelListComponent implements OnInit {
  hotelList:Hotel[];
  selectedRow : Number;

  constructor(private router: Router, private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(data=>{this.hotelList=data});
  }

  hotelRowClick(index){
    this.selectedRow =index;
  }

  hoteAdd(){   
  }
  hotelDelete(index){
    this.hotelList.splice(index,1);
  }

  hotelUpdate(){
  }
  
}
