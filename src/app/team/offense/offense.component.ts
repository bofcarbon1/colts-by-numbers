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
        image: '../../assets/images/stats/team_off_2020_run_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/team_off_2020_run_stats_graph_img.svg', 
        title: 'Colts 2020 Team Rushing'
      }, 
      { 
        image: '../../assets/images/stats/team_off_2020_pass_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/team_off_2020_pass_stats_graph_img.svg', 
        title: 'Colts 2020 Team Passing'
      },
      {
        image: '../../assets/images/stats/team_off_2020_fdowns_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/team_off_2020_fdowns_stats_graph_img.svg', 
        title: 'Colts 2020 Team First Downs'
      }
    ];   
    this.imageObject2 = [
      { 
        image: '../../assets/images/stats/team_off_run_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/team_off_run_stats_graph_img.svg', 
        title: 'Colts 2019 Team Rushing'
      }, 
      { 
        image: '../../assets/images/stats/team_off_pass_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/team_off_pass_stats_graph_img.svg', 
        title: 'Colts 2019 Team Passing'
      },
      {
        image: '../../assets/images/stats/team_off_fdowns_stats_graph_img.svg', 
        thumbImage:'../../assets/images/stats/team_off_fdowns_stats_graph_img.svg', 
        title: 'Colts 2019 Team First Downs'
      }
    ];    
  }

}
