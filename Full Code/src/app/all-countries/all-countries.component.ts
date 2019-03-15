import { Component, OnInit } from '@angular/core';

import {MapService} from '../map.service';

import {ActivatedRoute, Router} from "@angular/router";

import {Location} from '@angular/common';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
  providers:[Location]
})
export class AllCountriesComponent implements OnInit {

  public allCountries;
  public region1;

  constructor(public MapService:MapService,public _route:ActivatedRoute,public router:Router,
  public location:Location) {
    
   }

  ngOnInit() {
    let region = this._route.snapshot.paramMap.get('region').toLowerCase()
    this.region1 = region.toUpperCase();
    this.MapService.getAllCountries(region).subscribe(

      data=>{
        console.log(data);
        this.allCountries = data;
      }
    )
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }

}

