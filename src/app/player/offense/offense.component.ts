import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-offense',
  templateUrl: './offense.component.html',
  styleUrls: ['./offense.component.scss']
})
export class PlayerOffenseComponent implements OnInit {

  public imageObject;
  public imageObject2;

  constructor() { }

  ngOnInit(): void {
    this.imageObject = [
      {
        image: '../../assets/images/stats/player_off_2021_runs_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/player_off_2021_runs_stats_graph_img.svg',
        title: 'Colts 2021 Top Rushers'
      },
      {
        image: '../../assets/images/stats/player_off_2021_recs_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/player_off_2021_recs_stats_graph_img.svg',
        title: 'Colts 2021 Top Receivers'
      }
    ];
    this.imageObject2 = [
      {
        image: '../../assets/images/stats/player_off_2020_runs_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/player_off_2020_runs_stats_graph_img.svg',
        title: 'Colts 2020 Top Rushers'
      },
      {
        image: '../../assets/images/stats/player_off_2020_recs_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/player_off_2020_recs_stats_graph_img.svg',
        title: 'Colts 2020 Top Receivers'
      }
    ];
  }

}
