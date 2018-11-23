import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient ) {
    console.log('listo');
  }

  getNewReleases () {
    const headers = new HttpHeaders({
     'Authorization': 'Bearer BQAAMKIIqQssX1Ajqa991NIz3xdMOEkqfSeu8Mdgb2G-wwdX2A1qKRHJtERDMBUK-UUV7sPaDlgAjR7_u8o',
    });

    return this.http.get('	https://api.spotify.com/v1/browse/new-releases', {headers} );

    }

}
