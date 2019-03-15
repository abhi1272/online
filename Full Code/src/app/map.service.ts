import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MapService {

  mapBaseUrl = 'https://restcountries.eu/rest/v2';

  constructor(private _http:HttpClient) { }

  public getCountryData():any{
    
    let response = this._http.get(this.mapBaseUrl);
    return response
  }

  public getAllCountries(regionName):any{

    let response = this._http.get(this.mapBaseUrl + '/' + 'region'+ '/' + regionName);
    return response
  }

  public getSingleCountry(countryName):any{

    let response = this._http.get(this.mapBaseUrl + '/' + 'name'+ '/' + countryName + '?fullText=true');
    return response
  }

  public getCurrencyView(currency):any{

    let response = this._http.get(this.mapBaseUrl + '/' + 'currency' + '/' + currency)
    console.log(response);
    return response
  }

  public getLanguageView(language):any{
    let response = this._http.get(this.mapBaseUrl + '/' + 'lang' + '/' + language)
    console.log(response);
    return response
  }


}

