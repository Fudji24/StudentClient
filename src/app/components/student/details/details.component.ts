import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements AfterViewInit {

  currentStudent: any = [];

  ID: any;
  constructor(private route: ActivatedRoute, private service: ApiService, private router: Router) { 
    this.route.params.subscribe(params =>{
      this.ID =+ params["id"]
    });
    this.service.getStudentDetails(this.ID).subscribe((data:any)=>{
      this.currentStudent = data;
    })
   
  }



  ngAfterViewInit(){
    
    
  }

  backToList(){
    this.router.navigate([`home/`]);
  }

}
