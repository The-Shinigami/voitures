import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  companyName = 'Moberbar'
  pagesLinks = [
    {
      name: 'Home',
      link:'/home'
    },
    {
      name: 'About Us',
      link:'/aboutUs'
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
