import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  constructor(private http: HttpClient) { }
  getAllSeason(): Observable<Episode[]> {
    return this.http.get<Episode[]>('http://www.omdbapi.com/?t=Game%20of%20Thrones&apikey=b7ff6b1&Season=1')
  }
  getEpisode(episode: String): Observable<Episode> {
    return this.http.get<Episode>('http://www.omdbapi.com/?t=Game%20of%20Thrones&apikey=b7ff6b1&Season=1&Episode=' + episode )
  }
}
