import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-offense',
  templateUrl: './offense.component.html',
  styleUrls: ['./offense.component.scss']
})
export class PlayerOffenseComponent implements OnInit {

  public imageObject;

  constructor() { }

  ngOnInit(): void {
    this.imageObject = [
      { 
        image: '../../assets/images/stats/player_off_runs_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/player_off_runs_stats_graph_img.svg', 
        title: 'Colts Top Rushers'
      },
      { 
        image: '../../assets/images/stats/player_off_recs_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/player_off_recs_stats_graph_img.svg', 
        title: 'Colts Top Receivers'
      }
    ]; 
  }

}
