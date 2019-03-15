import { Component, OnInit } from '@angular/core';

import {MapService} from '../map.service';

import {ActivatedRoute, Router} from "@angular/router";

import {Location} from '@angular/common';

@Component({
  selector: 'app-currency-view',
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.css'],
  providers:[Location]
})
export class CurrencyViewComponent implements OnInit {

  public sameCurrencyCountry;
  public currency1;

  constructor(public _http:ActivatedRoute,public router:Router,public MapService:MapService,
  public location:Location) { }

  ngOnInit() {

    let currency = this._http.snapshot.paramMap.get('currency')
    this.currency1 = currency;

    this.MapService.getCurrencyView(currency).subscribe(

      data=>{
        this.sameCurrencyCountry = data;
        console.log(data)
      }
    )

  }

  public goBackToPreviousPage():any{
    this.location.back();
  }

}
