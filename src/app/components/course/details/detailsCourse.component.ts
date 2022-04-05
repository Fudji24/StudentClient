import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './detailsCourse.component.html',
  styleUrls: ['./detailsCourse.component.scss']
})
export class DetailsCourseComponent implements AfterViewInit {

  currentCourse: any = [];
  ID: any;
  constructor(private route: ActivatedRoute, private service: ApiService, private router: Router) { 
    this.route.params.subscribe(params =>{
      this.ID =+ params["id"]
    });
    this.service.getCourseDetails(this.ID).subscribe((data:any)=>{
      this.currentCourse = data;
    })
   
  }
  ngAfterViewInit(){
  }
  
  backToList(){
    this.router.navigate([`home/`]);
  }
}
