import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public courses: any=[]

  ActivateAddEditCourse: boolean = false;
  courseData: any;
  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }


  getCourses(){
    this.service.getCourses().subscribe((data) =>{
      this.courses = data as any;
      console.log(data)
    })
  }

  showCourseDetails(id:any){
    this.router.navigate([`Kurs/${id}`]);
  }
  addCourseClick(){
    this.courseData = {
      KursName: ""
    }
    this.ActivateAddEditCourse = true;
  }
  CloseCourseModal(){
    this.ActivateAddEditCourse = false;
  }
}
