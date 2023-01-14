import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [{
    dates : "04/2022 - Present",
    company : 'Ontario Power Generation',
    role: 'Template Specialist - IM Applications & Innovation',
    description: [
      "- Led the development of a province wide IT health status app that checks for system outages, improving the efficiency and reliability of company operations by providing timely information on system status and enabling proactive maintenance using Microsoft Power Apps and Power Automate. \n- Upgraded departments workflow by digitizing physical paper forms, converting documents into responsive web applications using Figma, Microsoft Power Apps, Power Automate and SharePoint List.\n - Created company-wide document templates that align with their branding style, streamlining document creation and ensuring consistent presentation of company materials using Figma, Microsoft Office and Visual Basic for Applications."
    ]
  },
  {
    dates : "03/2022 - 04/2022",
    company : 'Royal Bank of Canada',
    role: 'Analyst, Data Stewardship - Global Procurement',
    description: [
      "- Influenced decision making on how to invest in socially responsible vendors by modelling and visualizing diverse spend datasets leveraging Excel and Tableau. \n- Enhanced data accuracy and cleanliness by implementing a new migration tool that involves process mapping and elimination of errors to ensure the department can utilize for future projects. \n- Revamped department identity by designing various team logos that align with RBC’s styling brand using Figma."
    ]
  },
  {
    dates : "03/2021 - 03/2022",
    company : 'Royal Bank of Canada',
    role: 'Career Launch Associate',
    description: [
      "Analyst, Data Stewardship - RBC Global Procurement | December 2021 - March 2022\n - Improved the accessibility of functional partner data by transforming formerly text based datasets into user friendly dashboard visualizations leveraging bar charts, line graphs and trend lines from Tableau and Excel. \n- Optimized team workflow by consolidating and integrated major team milestones into centralized user experience using PlanView ProjectPlace. \n- Enhanced UI and user experience of the Procurement connect site from end to end through wire framing, testing and integration leveraging with Figma.\n\nWeb Expansion Coordinator, United Way of Durham Region | September 2021 - December 2021\n- Designed and developed campaign advertisement for united ways marketing initiatives using Canva and Sketch.\n- Lead, interpreted campaign analytics providing insights to project leads by visualizing project expenses and donation reports using Tableau and Excel.\n- Elevated campaign awareness by producing and editing videos using iMovie.\n\nCredit Card Dispute Advisor | March 2021 - September 2021\n- Assisted clients with recovering credit card dispute amounts by researching and building cases that were reviewed by credit card companies.\n- Validated data from internal and third party systems that ensured appropriate course of action was pursued.\n- Managed high volume of referrals and email inquiries to resolve credit card disputes."
    ]
  },
  {
    dates : "09/2020 - 06/2021",
    company : 'Ferraz Creative',
    role: 'Junior Web Developer',
    description: [
      "- Built production websites by collaborating with senior developer and designer on aspects of the site using PHP for WordPress, HTML/CSS/JavaScript and Figma.\n- Maintained website quality assurance by implementing responsive testing to ensure the backend data and front-end interfaces reflect properly on all platforms.\n- Leverage client/insight to identify and correct issues with overall website flow."
    ]
  },
  {
    dates : "09/2016 - 12/2020",
    company : 'Ontario Tech University',
    role: 'Bachelor of Science - Computer Science (Honours)',
  },
  {
    dates : "09/2014 - 08/2015",
    company : 'Durham College',
    role: 'General Arts and Science - Science and Engineering Prep (Ontario Tech Transfer)',
  }
]
}
