import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from 'src/app/components/student/student.component';
import { CourseComponent } from 'src/app/components/course/course.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsComponent } from 'src/app/components/student/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditStudentComponent } from 'src/app/components/student/add-edit-student/add-edit-student.component';
import { AddComponent } from 'src/app/components/course/add/add.component';
import { DetailsCourseComponent } from 'src/app/components/course/details/detailsCourse.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
    children: []
  },
  { path: 'student/:id', component: DetailsComponent },
  { path: 'Kurs/:id', component: DetailsCourseComponent }
  
]


@NgModule({
  declarations: [
    HomepageComponent,
    StudentComponent,
    CourseComponent,
    DetailsComponent,
    AddEditStudentComponent,
    AddComponent,
    DetailsCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [HomepageComponent]
})
export class HomepageModule { }
