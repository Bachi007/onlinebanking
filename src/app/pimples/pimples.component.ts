import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pimples',
  templateUrl: './pimples.component.html',
  styleUrls: ['./pimples.component.css']
})
export class PimplesComponent implements OnInit {
  

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
