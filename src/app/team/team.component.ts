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
        image: '../../assets/images/stats/team_off_div_2022_pass_yds_bar_img.svg',
        thumbImage:'../../assets/images/stats/team_off_div_2022_pass_yds_bar_img.svg',
        title: 'AFC South 2022 Team Passing Yards'
      },
      {
        image: '../../assets/images/stats/team_off_div_2022_rush_yds_bar_img.svg',
        thumbImage:'../../assets/images/stats/team_off_div_2022_rush_yds_bar_img.svg',
        title: 'AFC South 2022 Team Rushing Yards'
      }
    ]
  }

}
