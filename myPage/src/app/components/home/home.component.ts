import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title_big = 'Welcome To My Page';
  title_small = 'The Best Web Site , You Well Find Whats You Are Looking For ...';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  toSearchPage() {
    this.router.navigate(['/searchPage']);
  }
}
