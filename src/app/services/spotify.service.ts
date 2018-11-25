import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  urlBase: string;

  constructor(private http: HttpClient ) {
   this.urlBase = 'https://api.spotify.com/v1/';
  }

  getQuery (query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAV5seBU1F2Sanwliw7eb3Rmn5zD169-nN5Sckqy3K_jDUNCv4Da-zJBgsNtSLJz9IgaEE1ubm-7osNQfo',
     });

    return this.http.get(`${this.urlBase}${query}`, {headers} );
  }

  getNewReleases () {
    console.log(this.urlBase);
    return this.getQuery('browse/new-releases?limit=20').pipe(map( data => {
      return data['albums'].items;
    }));

    }

    findAndGetArtists (text: string) {

       return this.getQuery(`search?q=${text}&type=artist`).pipe(map( data => {
        return data['artists'].items;
      }));

    }


    getArtist (id: string) {

      return this.getQuery(`artists/${id}`);
   }

   getTopTracks (id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map( data => {
      return data['tracks'];
    }));
 }


}
