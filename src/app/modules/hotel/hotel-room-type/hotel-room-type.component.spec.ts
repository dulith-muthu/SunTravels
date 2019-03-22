import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomTypeComponent } from './hotel-room-type.component';

describe('HotelRoomTypeComponent', () => {
  let component: HotelRoomTypeComponent;
  let fixture: ComponentFixture<HotelRoomTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRoomTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
