import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newSongs: [];
  err: boolean;
  loading: boolean;

  constructor(private http: HttpClient, private spotify: SpotifyService) {
    this.loading = true;
    this.err = false;
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.loading = false;
      this.newSongs = data;
    }, (err: any) => {
      this.err = true;
      this.loading = false;
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
