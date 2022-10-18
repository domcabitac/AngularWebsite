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
    stack: 'Angular, TypeScript, Semantic UI'
  },{
    title : "Youtube Clone",
    banner : '/assets/img/youtube.png',
    link : {
      live : 'https://luminous-halva-541204.netlify.app/',
      code: 'https://github.com/domcabitac/youtube_clone'
    },
    stack: 'React, Material UI'
    },
  {
    title : "Github Finder",
    banner : '/assets/img/github.png',
    link : {
      live : 'https://hungry-ride-431acf.netlify.app/',
      code : 'https://github.com/domcabitac/github-finder',
  },
    stack: 'React, Bootstrap'
  },{
    title : "Budget Buddy",
    banner : '/assets/img/money.png',
    link : {
      live : 'https://zen-ride-cb29f1.netlify.app/',
      code: 'https://github.com/domcabitac/budget-app'
    },
    stack: 'Angular, TypeScript, Bulma'
  }
  ,
]

}
