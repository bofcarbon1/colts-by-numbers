import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.scss']
})
export class DefenseComponent implements OnInit {

  public imageObject;

  constructor() { }

  ngOnInit(): void {
    this.imageObject = [
      { 
        image: '../../assets/images/stats/team_def_run_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/team_def_run_stats_graph_img.svg', 
        title: 'Colts 2019 Team Rushing Allowed'
      }, 
      { 
        image: '../../assets/images/stats/team_def_pass_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/team_def_pass_stats_graph_img.svg', 
        title: 'Colts 2019 Team Passing Allowed'
      },
      {
        image: '../../assets/images/stats/team_def_fdowns_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/team_def_fdowns_stats_graph_img.svg', 
        title: 'Colts 2019 Team First Downs Allowed'
      }
    ];    
  }

}
