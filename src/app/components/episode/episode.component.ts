import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Episode } from 'src/app/models/episode.interface';
import { SeasonsService } from 'src/app/services/seasons.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  episode : Episode;
  constructor(
    private seasonsService: SeasonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('Episode')
    console.log('Identifier --> ', identifier);

    this.seasonsService.getEpisode(identifier).subscribe((episode) => {
      if(!episode) {
        return this.router.navigateByUrl('/');
      }
      this.episode = episode;
      console.log('Episode --> ', this.episode);
    })

  }

}
