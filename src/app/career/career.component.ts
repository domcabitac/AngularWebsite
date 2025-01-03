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
  data = [
  {
    dates : "06/2023 - Present",
    company : 'Nuclear Promise X',
    role: 'Digital Product Owner and Designer',
    description: [
      "- Facilitated collaboration between clients and internal products team, leveraging technical background, Agile methodologies, and Azure DevOps to deliver successful solutions for clients such as Ontario Power Generation, and Bruce Power.\n- Strengthened client relationship by conducting user interviews with multiple key stakeholders, mapping out current workflows, identifying pain points, and proposing optimized solutions to improve overall digital user experience.\n- Transformed client’s requirement and discovery work findings into high-fidelity digital wireframes that align with company’s design brand guide as well as implementing cutting edge design practices using Figma.\n- Defined project requirements by creating detailed user stories and acceptance criteria leveraging the findings from the discovery sessions, organizing them on Azure DevOps to create a central hub for the developers to review the project backlog and their tasks.\n- Validated project functionalities by developing a user acceptance testing (UAT) plan to ensure streamline stakeholder QA testing, embedding the acceptance criteria from Azure DevOps."
    ]
  },
  {
    dates : "03/2023 - 06/2023",
    company : 'Nuclear Promise X',
    role: 'Power Platform Developer',
    description: [
      "- Initiated and led the development for Azure DevOps release pipelines for seamless transfer of custom solutions across various environments cutting development release cycle timelines by 40%.\n- Efficiently familiarized with the company's development stack, architecture tools, and design principles, achieving a subject matter expertise role in a short timeframe"
    ]
  },
  {
    dates : "04/2022 - 03/2023",
    company : 'Ontario Power Generation',
    role: 'Template Specialist - IM Applications & Innovation',
    description: [
      "- Led the development of a province wide IT health status app that checks for system outages, improving the efficiency and reliability of company operations by providing timely information on system status and enabling proactive maintenance using Microsoft Power Apps and Power Automate. \n- Upgraded departments workflow by digitizing physical paper forms, converting documents into responsive web applications using Figma, Microsoft Power Apps, Power Automate and SharePoint List.\n - Created company-wide document templates that align with their branding style, streamlining document creation and ensuring consistent presentation of company materials using Figma, Microsoft Office and Visual Basic for Applications."
    ]
  },
  {
    dates : "03/2022 - 04/2022",
    company : 'Royal Bank of Canada',
    role: 'Data Analyst, Global Procurement',
    description: [
      "- Influenced decision making on how to invest in socially responsible vendors by modelling and visualizing diverse spend datasets leveraging Excel and Tableau. \n- Enhanced data accuracy and cleanliness by implementing a new migration tool that involves process mapping and elimination of errors to ensure the department can utilize for future projects. \n- Revamped department identity by designing various team logos that align with RBC’s styling brand using Figma."
    ]
  },
  {
    dates : "03/2021 - 03/2022",
    company : 'Royal Bank of Canada',
    role: 'Career Launch Associate',
    description: [
      "Data Analyst - RBC Global Procurement | December 2021 - March 2022\n - Improved the accessibility of functional partner data by transforming formerly text based datasets into user friendly dashboard visualizations leveraging bar charts, line graphs and trend lines from Tableau and Excel. \n- Optimized team workflow by consolidating and integrated major team milestones into centralized user experience using PlanView ProjectPlace. \n- Enhanced UI and user experience of the Procurement connect site from end to end through wire framing, testing and integration leveraging with Figma.\n\nWeb Expansion Coordinator, United Way of Durham Region | September 2021 - December 2021\n- Designed and developed campaign advertisement for united ways marketing initiatives using Canva and Sketch.\n- Lead, interpreted campaign analytics providing insights to project leads by visualizing project expenses and donation reports using Tableau and Excel.\n- Elevated campaign awareness by producing and editing videos using iMovie.\n\nCredit Card Dispute Advisor | March 2021 - September 2021\n- Assisted clients with recovering credit card dispute amounts by researching and building cases that were reviewed by credit card companies.\n- Validated data from internal and third party systems that ensured appropriate course of action was pursued.\n- Managed high volume of referrals and email inquiries to resolve credit card disputes."
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
