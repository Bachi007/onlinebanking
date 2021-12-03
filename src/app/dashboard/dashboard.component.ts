import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(private router:Router) { }
  user=JSON.parse(localStorage.getItem('isLoggedIn'));
  username=this.user.name;
  logout() {
    localStorage.removeItem("isLoggedIn");
    this.router.navigateByUrl('/login')
  }

  ngOnInit() {
  }

}
