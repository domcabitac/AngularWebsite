import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [{
    logo: "/assets/img/code.svg",
    color: "rgb(62,127,213)",
    title: "Development",
    listDesktop: "Javascript\nAngular\nReact\nPowerPlatform",
    listMobile: "Javascript, Angular, React, PowerPlatform"
  },
  {
    logo: "/assets/img/design.svg",
    color: "#7337B",
    title: "Design",
    listDesktop: ["Figma\nSketch\nCanva\nUI Design"],
    listMobile: "Figma, Sketch, Canva, UI Design"
  },
  {
    logo: "/assets/img/analytics.svg",
    color: "#35AFA0",
    title: "Analytics",
    listDesktop: ["Visualizations\nPowerBI\nTableau\nExcel"],
    listMobile: "Data Visualizations, PowerBI, Tableau, Excel"
  }
]
}
