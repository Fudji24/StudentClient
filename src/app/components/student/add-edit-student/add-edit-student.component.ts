import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.scss']
})
export class AddEditStudentComponent implements OnInit {

  @Input() studentData: any
  StudentId!: string;
  Ime!: string;
  Prezime!: string;
  Godina!: number;
  Status!: string;
  IndexNum!: number;

  statuses: any = [];
  
  constructor(private service: ApiService, private router: Router) { 
    this.getStatuses();
  }

  ngOnInit(): void {
    this.getStatuses();

    this.StudentId = this.studentData.StudentId;
    this.Ime = this.studentData.Ime;
    this.Prezime = this.studentData.Prezime;
    this.Godina = this.studentData.Godina;
    this.IndexNum = this.studentData.IndexNum;
  }

  getStatuses(){
    this.service.getStatuses().subscribe(res =>{
      this.statuses = res
    })
  }
 
  addStudent(){
    var val = {
        Ime: this.Ime,
        Prezime: this.Prezime,
        Godina: this.Godina,
        Status: this.Status,
        IndexNum: this.IndexNum
    };
    
    
    this.service.addStudent(val).subscribe(res =>{
        alert(res.toString());
        window.location.reload();
    });
    
  }

  editStudent(){
    var val = {
        StudentId:this.StudentId,
        Ime: this.Ime,
        Prezime: this.Prezime,
        Godina: this.Godina,
        Status: this.Status,
        IndexNum: this.IndexNum
    };
   
      this.service.editStudent(val, this.studentData.StudentId).subscribe(res =>{
        alert(res.toString());
        window.location.reload();
        
    });
      
  }

}
