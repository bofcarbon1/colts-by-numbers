import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.scss']
})
export class DefenseComponent implements OnInit {

  public imageObject;
  public imageObject2;

  constructor() { }

  ngOnInit(): void {
    this.imageObject = [
      {
        image: '../../assets/images/stats/team_def_2022_run_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_def_2022_run_stats_graph_img.svg',
        title: 'Colts 2022 Team Rushing Allowed'
      },
      {
        image: '../../assets/images/stats/team_def_2022_pass_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_def_2022_pass_stats_graph_img.svg',
        title: 'Colts 2022 Team Passing Allowed'
      },
      {
        image: '../../assets/images/stats/team_def_2022_fdowns_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_def_2022_fdowns_stats_graph_img.svg',
        title: 'Colts 2022 Team First Downs Allowed'
      }
    ];
    this.imageObject2 = [
      {
        image: '../../assets/images/stats/team_def_2021_run_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_def_2021_run_stats_graph_img.svg',
        title: 'Colts 2021 Team Rushing Allowed'
      },
      {
        image: '../../assets/images/stats/team_def_2021_pass_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_def_2021_pass_stats_graph_img.svg',
        title: 'Colts 2021 Team Passing Allowed'
      },
      {
        image: '../../assets/images/stats/team_def_2021_fdowns_stats_graph_img.svg',
        thumbImage:'../../assets/images/stats/team_def_2021_fdowns_stats_graph_img.svg',
        title: 'Colts 2021 Team First Downs Allowed'
      }
    ];
  }

}
