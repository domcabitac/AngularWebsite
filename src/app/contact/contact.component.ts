import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [{
    logo: "/assets/img/email.svg",
    link: "mailto:dominiccabitac@gmail.com"
  },
  {
    logo: "/assets/img/linkedin.svg",
    link: "https://www.linkedin.com/in/dominic-cabitac/"
  },
  {
    logo: "/assets/img/github.svg",
    link: "https://github.com/domcabitac"
  },
  {
    logo: "/assets/img/resume.svg",
    link: "../../assets/docs/DominicCabitac_Resume.pdf"
  }
]
}
