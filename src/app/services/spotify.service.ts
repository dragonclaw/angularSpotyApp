import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient ) {
    console.log('listo');
  }

  getNewReleases () {
    const headers = new HttpHeaders({
     'Authorization': 'Bearer BQDKvqL6yqjXF5Slh_kYVN3-B-EgoDb4UzCprcwb29UGLJyc6T4JRA-uSIEYZkDpRlhMfjzsHVV9a09VHcE',
    });

    this.http.get('	https://api.spotify.com/v1/browse/new-releases', {headers} ).subscribe(data => {
      console.log(data);
    });
  }

}
