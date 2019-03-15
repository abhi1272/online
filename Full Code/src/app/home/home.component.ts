import { Component, OnInit } from '@angular/core';

import {MapService} from '../map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public arr = []
  public regions;

  constructor(public MapService:MapService) {
    console.log('home component called')
   }

  ngOnInit() {
    document.body.classList.add('bg-img');
    console.log('ngoinit called')
    this.getCountryName();
  }

  public getCountryName():any{

    this.MapService.getCountryData().subscribe(

      data=>{
        //this.regions = data
        data.map((item)=>{
          this.arr.push(item.region);
        })
          this.regions = new Set(this.arr)
          console.log(this.regions);
      }

    )

  }

}
