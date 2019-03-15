import { Component, OnInit } from '@angular/core';

import {MapService} from '../map.service';

import {ActivatedRoute, Router} from "@angular/router";

import {Location} from '@angular/common';

@Component({
  selector: 'app-language-view',
  templateUrl: './language-view.component.html',
  styleUrls: ['./language-view.component.css'],
  providers:[Location]
})
export class LanguageViewComponent implements OnInit {

  public sameLanguageCountry;
  public language1;

  constructor(public _http:ActivatedRoute,public router:Router,public MapService:MapService,
  public location:Location) { }

  ngOnInit() {

    let language = this._http.snapshot.paramMap.get('language')
    this.language1 = language;

    this.MapService.getLanguageView(language).subscribe(

      data=>{
        this.sameLanguageCountry = data;
        console.log(data)
      }
    )
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }

}
