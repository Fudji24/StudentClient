import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Input() courseData: any
  KursId!: string;
  KursName!: string;
  StudentId!: string;
  students: any = [];

  selectedStudents: any = [];

  checkboxChecked: boolean = false;
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.getStudents();
  }
  addCourse(){
    var val = {
      KursName: this.KursName,
      StudentKurs: this.selectedStudents
  };

  
  this.service.addCourse(val).subscribe(res =>{
      alert(res.toString());
      console.log(val.StudentKurs)
      window.location.reload();
  });
  }

  toggleSelection(student: any, event: any){
    if(event.target.checked){
      console.log("checked");
      this.selectedStudents.push(student);
      console.log(this.selectedStudents);
      
    }
    else{
      console.log("unchecked")
      const index = this.selectedStudents.findIndex((list:any) => list.StudentId == student.StudentId)
      this.selectedStudents.splice(index, 1);
      console.log(this.selectedStudents);
    }
    
  }

  getStudents(){
    this.service.getStudents().subscribe(res =>{
      this.students = res;
      this.StudentId = this.students[0].StudentId;
      console.log(this.StudentId)
      
    })
  }
}
