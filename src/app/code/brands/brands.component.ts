import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [{
    logo : '/assets/img/Logos/FC.svg',
    link : 'https://www.ferrazcreative.com/'
  },{
    logo : '/assets/img/Logos/RBC.svg',
    link : 'https://www.rbcroyalbank.com/personal.html'
  },{
    logo : '/assets/img/Logos/SPA.svg',
    link : 'https://wearesparkent.com/'
  },{
    logo : '/assets/img/Logos/Ver.svg',
    link : 'https://verifytab.com/'
  },{
    logo : '/assets/img/Logos/UWDR.svg',
    link : 'https://unitedwaydr.com/'
  },{
    logo : '/assets/img/Logos/OPG.svg',
    link : 'https://www.opg.com/'
  }]

}
