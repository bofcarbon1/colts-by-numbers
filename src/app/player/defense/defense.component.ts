import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.scss']
})
export class PlayerDefenseComponent implements OnInit {

  public imageObject;
  public imageObject2;

  constructor() { }

  ngOnInit(): void {
    this.imageObject = [
      { 
        image: '../../assets/images/stats/player_def_2020_sacks_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/player_def_2020_sacks_stats_graph_img.svg', 
        title: 'Colts 2020 Top Sackers'
      },
      { 
        image: '../../assets/images/stats/player_def_2020_tackles_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/player_def_2020_tackles_stats_graph_img.svg', 
        title: 'Colts 2020 Top Tacklers'
      },
      { 
        image: '../../assets/images/stats/player_def_2020_ints_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/player_def_2020_ints_stats_graph_img.svg', 
        title: 'Colts 2020 Top Interceptors'
      }
    ];
    this.imageObject2 = [
      { 
        image: '../../assets/images/stats/player_def_sacks_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/player_def_sacks_stats_graph_img.svg', 
        title: 'Colts 2019 Top Sackers'
      },
      { 
        image: '../../assets/images/stats/player_def_tackles_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/player_def_tackles_stats_graph_img.svg', 
        title: 'Colts 2019 Top Tacklers'
      },
      { 
        image: '../../assets/images/stats/player_def_ints_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/player_def_ints_stats_graph_img.svg', 
        title: 'Colts 2019 Top Interceptors'
      }
    ];
  }

}
