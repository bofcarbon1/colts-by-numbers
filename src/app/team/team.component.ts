import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
   
  public imageObject;

  constructor() { }

  ngOnInit(): void {
    this.imageObject = [
      { 
        image: '../../assets/images/stats/team_off_div_2020_pass_rate_bar_img.svg', 
        thumbImage:'../../assets/images/stats/team_off_div_2020_pass_rate_bar_img.svg', 
        title: 'AFC South 2020 Team Passer Rating'
      },
      { 
        image: '../../assets/images/stats/team_off_div_2020_rush_yds_bar_img.svg', 
        thumbImage:'../../assets/images/stats/team_off_div_2020_rush_yds_bar_img.svg', 
        title: 'AFC South 2020 Team Rushing Yards'
      }
    ]
  }

}
