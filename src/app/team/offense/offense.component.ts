import { Component, OnInit } from '@angular/core';
import '../offense/ngb-carousel.css';

@Component({
  selector: 'app-offense',
  templateUrl: './offense.component.html',
  styleUrls: ['./offense.component.scss']
})

export class OffenseComponent implements OnInit {
  
  public imageObject;
  
  constructor() { }

  ngOnInit(): void {
    this.imageObject = [
      { 
        image: 'http://localhost:4200/team/offense/../../assets/images/stats/team_off_run_stats_graph_img.svg', 
        thumbImage:'http://localhost:4200/team/offense/../../assets/images/stats/team_off_run_stats_graph_img.svg', 
        title: 'Colts 2019 Team Rushing'
      }, 
      { 
        image: 'http://localhost:4200/team/offense/../../assets/images/stats/team_off_pass_stats_graph_img.svg', 
        thumbImage:'http://localhost:4200/team/offense/../../assets/images/stats/team_off_pass_stats_graph_img.svg', 
        title: 'Colts 2019 Team Passing'
      },
      {
        image: 'http://localhost:4200/team/offense/../../assets/images/stats/team_off_fdowns_stats_graph_img.svg', 
        thumbImage:'http://localhost:4200/team/offense/../../assets/images/stats/team_off_fdowns_stats_graph_img.svg', 
        title: 'Colts 2019 Team First Downs'
      }
    ];
    console.log("this.imageObject: ", this.imageObject)
  }

}
