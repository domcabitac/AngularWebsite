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
    logo : '/assets/img/Logos/RBC.svg',
    link : 'https://www.rbcroyalbank.com/personal.html'
  },{
    logo : '/assets/img/Logos/BP.svg',
    link : 'https://www.brucepower.com/'
  },{  
    logo : '/assets/img/Logos/Legrand.svg',
    link : 'https://www.legrand.us'
  },{
    logo : '/assets/img/Logos/OPG.svg',
    link : 'https://www.opg.com/'
  },{
    logo : '/assets/img/Logos/CNIC.svg',
    link : 'https://www.canadianisotopes.ca'
  },{
    logo : '/assets/img/Logos/NPX.svg',
    link : 'https://www.npxinnovation.ca'  
  },{
    logo : '/assets/img/Logos/SPA.svg',
    link : 'https://www.wearesparks.com'
  },{
    logo : '/assets/img/Logos/Ver.svg',
    link : 'https://verifytab.com'
  },{
    logo : '/assets/img/Logos/FC.svg',
    link : 'https://www.ferrazcreative.com/'
  }
]

}
