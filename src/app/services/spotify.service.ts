import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      // disclaimer: change token from postman when time limit is expired
      Authorization: 'Bearer BQABRxHXJjkNdTNdbMyLZrHUIaNkaQ7E9CMaGAbDlUPiDojhxwOiN2GJCmlmiMM0xZfkhPGL5eGUjdvNYa4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?llimit=20', { headers });
  }
}
