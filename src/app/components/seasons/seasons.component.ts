import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode.interface';
import { SeasonsService } from 'src/app/services/seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  episodes: Episode[] = [];
  
  constructor(private seasonsService: SeasonsService) { }

  ngOnInit(): void {
    this.seasonsService
    .getAllSeason()
    .subscribe((episodes) => this.episodes = episodes);
  }

}
