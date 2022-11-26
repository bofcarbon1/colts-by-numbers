import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  sitelinks:string;
  services:string;
  repositorylinks:string[];
  name:string;
  title:string;
  phone:string;
  email:string;
  public myPersonals:string;
  public myEmail:string;
  public mySiteLinks:string;
  public myServices:string;

  constructor() { }

  ngOnInit(): void {
    this.getAllPersonal();
    this.getEmail();
    this.getSiteLinks();
  }

  private getAllPersonal(): void {
    var projectString =  JSON.stringify(  { "name" : "Brian Quinn",
    "title" : "Sr. Full Stack App Developer",
     "phone" : "518-727-2933 (cell) "} );
    this.myPersonals = JSON.parse(projectString);
    this.name = this.myPersonals["name"];
    this.title = this.myPersonals["title"];
    this.phone = this.myPersonals["phone"];
  }

  private getEmail(): void {
    var emailString = JSON.stringify({ "emailname" : "bofcarbon1",
     "emailsite" : "gmail" }  );
    this.myEmail = JSON.parse(emailString);
    this.email = this.myEmail["emailname"] + '@'
      + this.myEmail["emailsite"] + '.com';
  }

  private getSiteLinks(): void {
    var sitesString = JSON.stringify(  [
      { "id" : 1, "sitename" : "linkedIn", "sitelink" : "https://www.linkedin.com/in/brian-quinn-372a87?trk=nav_responsive_tab_profile"},
      { "id" : 3, "sitename" : "GitHub", "sitelink" : "https://github.com/bofcarbon1"}
      ]);
    this.mySiteLinks = JSON.parse(sitesString);
    this.sitelinks = this.mySiteLinks;

  }

}