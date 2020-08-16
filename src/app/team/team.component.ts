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
        image: '../../assets/images/stats/team_off_div_passrtngs_bar_img.svg', 
        thumbImage:'../../assets/images/stats/team_off_div_passrtngs_bar_img.svg', 
        title: 'AFC South 2019 Team Passer Rating'
      },
      { 
        image: '../../assets/images/stats/team_off_div_rushyds_bar_img.svg', 
        thumbImage:'../../assets/images/stats/team_off_div_rushyds_bar_img.svg', 
        title: 'AFC South 2019 Team Rushing Yards'
      }
    ]
  }

}
