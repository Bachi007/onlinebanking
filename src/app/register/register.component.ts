import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import swal from 'sweetalert'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  constructor(private http:HttpClient,private user:RegisterService,private router:Router) { }
register(){
  var user={
  "name":this.name,
  "email":this.email,
  "mobile":this.mobile,
  "password":this.password,
  "passwordConf":this.passwordConf,
 
  }
  this.user.user(user).subscribe(result=>{
    this.res=result;
    if(this.res!=null){
      swal("","Registered Successfully","success")
      this.router.navigateByUrl('/login')
    }
  })
}
  ngOnInit() {
    
  }

}
