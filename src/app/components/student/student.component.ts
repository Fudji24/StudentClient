import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public students: any=[]
  ActivateAddEditComp: boolean = false;
 
  studentData: any;
  
  constructor(private service: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }


  getStudents(){
    this.service.getStudents().subscribe((data) =>{
      this.students = data as any;
      console.log(data)
    })
  }

  showStudentDetails(id: any){
    this.router.navigate([`student/${id}`]);
    console.log(id)
  }
  addClick(){
    this.studentData = {
      Ime: "",
      Prezime: "",
      Godina: "",
      Status: "",
      IndexNum: "",
  
    }
    this.ActivateAddEditComp = true;
    console.log(this.ActivateAddEditComp)
    }

    editClick(item: any){
      this.studentData = item;
      console.log(this.studentData);
      this.ActivateAddEditComp = true;
    }

    CloseModal(){
      this.ActivateAddEditComp = false;
    }
  deleteSudent(id:any){
  
    if(confirm("Are you sure you want to delete this new?")){
      this.service.deleteStudent(id).subscribe(data =>{
      
        this.getStudents();
      });
    }
  }

 
}