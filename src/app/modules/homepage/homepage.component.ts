import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
 
  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    if(window.sessionStorage.getItem('userToken')==null){
      this.router.navigate([`/Login`]);
    }
  }
  

  logout(){
    this.service.logout();
    this.router.navigateByUrl('/Login')
    

  }
}
