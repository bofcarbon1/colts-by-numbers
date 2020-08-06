import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.scss']
})
export class PlayerDefenseComponent implements OnInit {

  public imageObject;

  constructor() { }

  ngOnInit(): void {
    this.imageObject = [
      { 
        image: '../../assets/images/stats/player_def_sacks_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/player_def_sacks_stats_graph_img.svg', 
        title: 'Colts Top Sackers'
      },
      { 
        image: '../../assets/images/stats/player_def_tackles_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/player_def_tackles_stats_graph_img.svg', 
        title: 'Colts Top Tacklers'
      },
      { 
        image: '../../assets/images/stats/player_def_ints_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/player_def_ints_stats_graph_img.svg', 
        title: 'Colts Top Interceptors'
      }
    ]
  }

}
