import { Component, OnInit } from '@angular/core';
import '../offense/ngb-carousel.css';

@Component({
  selector: 'app-offense',
  templateUrl: './offense.component.html',
  styleUrls: ['./offense.component.scss']
})

export class OffenseComponent implements OnInit {

  public imageObject;
  public imageObject2;

  constructor() { }

  ngOnInit(): void {
    this.imageObject = [
      {
        image: '../../assets/images/stats/team_off_2022_run_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_off_2022_run_stats_graph_img.svg',
        title: 'Colts 2022 Team Rushing'
      },
      {
        image: '../../assets/images/stats/team_off_2022_pass_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_off_2022_pass_stats_graph_img.svg',
        title: 'Colts 2022 Team Passing'
      },
      {
        image: '../../assets/images/stats/team_off_2022_fdowns_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_off_2022_fdowns_stats_graph_img.svg',
        title: 'Colts 2022 Team First Downs'
      }
    ];
    this.imageObject2 = [
      {
        image: '../../assets/images/stats/team_off_2021_run_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_off_2021_run_stats_graph_img.svg',
        title: 'Colts 2021 Team Rushing'
      },
      {
        image: '../../assets/images/stats/team_off_2021_pass_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_off_2021_pass_stats_graph_img.svg',
        title: 'Colts 2021 Team Passing'
      },
      {
        image: '../../assets/images/stats/team_off_2021_fdowns_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_off_2021_fdowns_stats_graph_img.svg',
        title: 'Colts 2021 Team First Downs'
      }
    ];
  }

}
