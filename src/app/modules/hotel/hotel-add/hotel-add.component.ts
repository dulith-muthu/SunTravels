import { Component, OnInit,Input } from '@angular/core';
import {Hotel} from '../../../data-models/hotel';
import {HotelService} from '../../../services/hotel-service';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.sass']
})
export class HotelAddComponent implements OnInit {
  hotelListInAdd:Hotel[];
  model = new Hotel('','','',1);
  submitted = false;
  starRates=[1,2,3,4,5]

  constructor(
    private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(data=>{this.hotelListInAdd=data});
  }

  onSubmit() { this.submitted = true;
  console.log(this.model) }


  addCurrentHotel(){
    this.model = new Hotel('', '','',1);
  }
}
