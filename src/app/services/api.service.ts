import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { identifierName } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {
    const token = localStorage.getItem('token')
    if (token && token.length > 0){
        this.setHeader(token);
    }
   }

   private header!: HttpHeaders;

  private parseUrlParams (params: any){
    let urlParams: HttpParams = new HttpParams();
    for(const key in params){
        if(params.hasOwnProperty(key)){
            if(typeof key === 'string' && typeof params[key] !== 'undefined'){
                urlParams = urlParams.set(key, params[key].toString());
                
            }
        }
    }
    return urlParams;
  }
  setHeader(token: string): void{
      this.header = new HttpHeaders().append('Content-Type', 'application/json');
      if(token){
          this.header = this.header.append('Authorization', 'Bearer ${token}');
      }
  }

  getHttp(path: string, params: any){
      return this.http.get(`${env.baseUrl}${path}`, {
          headers: this.header,
          params: this.parseUrlParams(params)
      });
  }
  postHttp(path: string, body: object, params: any){
      return this.http.post(`${env.baseUrl}${path}`, JSON.stringify(body), {
          headers: this.header,
          params: this.parseUrlParams(params)
      });
  }



    getStudents(){
        return this.http.get(env.baseUrl + "api/Student");
    }

    getStudentDetails(id:any){
      return this.http.get(env.baseUrl + "api/Student/" + id)
    }

    addStudent(val: any){
        return this.http.post(env.baseUrl + "api/Student", val);
    }
    editStudent(val: any, id: any){
        return this.http.put(env.baseUrl + "api/Student/" + id, val);
    }
    deleteStudent(id: any){
        return this.http.delete(env.baseUrl + "api/Student/" + id);
    }
    getCourses(){
        return this.http.get(env.baseUrl + "api/Kurs");
    }
    getCourseDetails(id: any){
        return this.http.get(env.baseUrl + "api/Kurs/" + id)
    }
    addCourse(val: any){
        return this.http.post(env.baseUrl + "api/Kurs/", val);
    }
   getStatuses(){
       return this.http.get(env.baseUrl + "api/Status");
   }



   UserAuthentication(UserName: string, Password: string):Observable<any>{    
    let credentials='UserName=' + UserName + '&Password=' + Password +'&grant_type=password';     
    var reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });    
    return this.http.post<any>(env.baseUrl + 'token',encodeURI(credentials),{headers:reqHeader}); 
   }

   logout(){
    sessionStorage.removeItem('userToken');
   }
}
