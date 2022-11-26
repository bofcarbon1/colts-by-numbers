import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-work',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  allprojects:any;
  projectParsed:any;
  displayedColumns = ["Project", "Year", "Notes"];
  sortedData = [];

  constructor() {

   }

  ngOnInit(): void {
    this.getProjects();
  }

  ngOnDestroy(): void {

  }

  private getProjects(): void {
    var projectString =  JSON.stringify(
        [
        { "id" : "2", "name" : "NDOR", "year" : "2016", "note" : "Built site admin tool in .NET, MVC, JQuery Ajax", "type" : "web" },
        { "id" : "3", "name" : "Limelight", "year" : "2016", "note" : "Built check ACH payment  web app using .NET, MVC, JQuery and Ajax ", "type" : "web" },
        { "id" : "9", "name" : "Dependable Solutions", "year" : "2015", "note" : "Enhanced Product Licensing web app using ASP.NET, with JQuery and Ajax", "type" : "web" },
        { "id" : "11", "name" : "Comcast", "year" : "2016", "note" : "Built Marketing web app using MVC, JQuery and Ajax", "type" : "web" },
        { "id" : "12", "name" : "Thomson Reuters ", "year" : "2017", "note" : "Eikon Fund Views - Funancial tool in Angular SPA - bug fixes", "type" : "web" },
        { "id" : "14", "name" : "Clark County Assessor", "year" : "2011", "note" : "Created a Property Assessment Appeal web app using NET and JQuery,", "type" : "web" },
        { "id" : "15", "name" : "HP", "year" : "2013", "note" : "Enhanced an e-Commerce web app using .NET, MVC, JavaScript, JQuery, ", "type" : "web" },
        { "id" : "20", "name" : "DXC", "year" : "2018", "note" : "Enhanced UI for Medicaid web app using Angular 4 with Node, .NET API ", "type" : "web" },
        { "id" : "21", "name" : "FiServ", "year" : "2019", "note" : "Enhanced education loan web app using Angular 7, SQL Server", "type" : "web" },
        { "id" : "24", "name" : "My Work", "year" : "2020", "note" : "Built Python numpy, Matplolib stat graphs for web using Django/Angular 9, MySQL", "type" : "web" }

      ]);
    this.projectParsed = JSON.parse(projectString);
    this.sortedData = this.projectParsed.slice();
    this.allprojects = this.projectParsed;
  }

  sortData(sort: Sort) {
    const dataAsc = this.projectParsed.slice();
    const dataDesc = this.projectParsed.slice();
    //if (!sort.active || sort.direction === '') {
    console.log("sortOrder: ", sort.direction);
    if(sort.direction === 'asc') {
      this.sortedData = dataAsc;
    } else {
      this.sortedData = dataDesc;
    }
    this.allprojects = this.sortedData;
    //}

    this.sortedData = dataAsc.sort((a, b) => {
      return a.year - b.year
    });

    this.sortedData = dataDesc.sort((a, b) => {
      return a.year - b.year
    }).reverse();
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
