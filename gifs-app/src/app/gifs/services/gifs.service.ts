
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GifsService {

  private apiKey:string = 'K77knKxTMbWDSTCpc4enPVPEaSh50WzS';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  private _tagsHistory: string[] = [];
  constructor( private http:HttpClient) { }
  get tagsHistory(){
    return [...this._tagsHistory];
  }
  private organizeHistory(tag: string){
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }
  searchTag(tag: string):void{
    if(tag.length === 0) return;
    this.organizeHistory(tag);
    //this._tagsHistory.unshift(tag);
    //console.log(this.tagsHistory);
    /*
    fetch('https://api.giphy.com/v1/gifs/search?api_key=K77knKxTMbWDSTCpc4enPVPEaSh50WzS&q=valorant&limit=10')
    .then( resp => resp.json())
    .then( data => console.log(data));
    */
    /*
    const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=K77knKxTMbWDSTCpc4enPVPEaSh50WzS&q=valorant&limit=10');
    const data = await resp.json();
    console.log(data);
    */
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag);

    this.http.get(`${this.serviceUrl}/search`, { params })
    .subscribe( resp => {
      console.log(resp);

    });
  }

}
