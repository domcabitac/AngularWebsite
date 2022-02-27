import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [{
    title : "COVID19 Tracker",
    banner : '/assets/img/covid.png',
    link : {
      live : 'https://competent-heisenberg-f8f7ef.netlify.app/',
      code: 'https://github.com/domcabitac/covid19'
    },
    stack: 'Angular, TypeScript, Semantic UI',
    desc: 'A user friendly data visualization website that allows users to track SARSCoV2 across Canada.',
    active : 'Yes'
  },{
    title : "Github Finder",
    banner : '/assets/img/github.png',
    link : {
      code : 'https://github.com/domcabitac/github-finder',
  },
    stack: 'React, Bootstrap',
    desc: 'A web app that searches for GitHub users. Implemented with the Github API to get the users information.',
    active : 'Yes'
  },{
    title : "Budget Buddy",
    banner : '/assets/img/money.png',
    link : {
      live : 'https://zen-ride-cb29f1.netlify.app/',
      code: 'https://github.com/domcabitac/budget-app'
    },
    stack: 'Angular, TypeScript, Bulma',
    desc: 'A simple budgeting web app that allows users to organize their expenses and income by categories.',
    active : 'Yes'
  },{
    title : "Lululemon",
    banner : '/assets/img/lululemon.png',
    link : {
      live : '',
      code: ''
    },
    stack: 'MEAN Stack',
    desc: 'Lululemon clone site coming soon. Currently under construction.',
    active : 'No'
  }]

}
