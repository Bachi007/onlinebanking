import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private http:HttpClient,private login:RegisterService,private router:Router) { }
submit(){
  var user={
    "name":this.username,
    "password":this.password
  }
  this.login.check(user).subscribe(res=>{
   
    console.log(typeof(res))
    console.log(res['status'])
    this.result=res['data']
      if(this.result!=null){
        localStorage.setItem('isLoggedIn',JSON.stringify(res['data']));
       
          this.router.navigateByUrl('/dashboard')

        
        
  
      }
      else{
        this.errorMessage=res['Status']
      } 
    });
}
  ngOnInit() {
  }

}
