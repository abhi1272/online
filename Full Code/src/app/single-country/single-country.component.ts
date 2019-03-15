import { Component, OnInit } from '@angular/core';

import { MapService } from '../map.service';

import { ActivatedRoute, Router } from "@angular/router";

import {Location} from '@angular/common';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css'],
  providers:[Location]
})
export class SingleCountryComponent implements OnInit {

  public countryDetails;
  public timezones = [];
  public countyName1;

  constructor(public _route: ActivatedRoute, public router: Router, public MapService: MapService,
  public location:Location) { }

  ngOnInit() {

    let countryName = this._route.snapshot.paramMap.get('name');
    this.countyName1 = countryName;

    this.MapService.getSingleCountry(countryName).subscribe(

      data => {
        this.countryDetails = data;
        console.log(this.countryDetails);
       
      }
    )
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }

}
