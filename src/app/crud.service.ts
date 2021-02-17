import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  loginForm: any;
  delete(regno: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private _httpClient:HttpClient) { }

isEdit=false;
editStudent={} as any;
  getLogin(){
    return this._httpClient.get("https://localhost:44324/api/login");
  }
postLogin(student:any){
  return this._httpClient.post("https://localhost:44324/api/login", student)
  
}
putLogin(student:any){
  return this._httpClient.put("https://localhost:44324/api/login",student);

}
deleteEntry(sid:number){
  return this._httpClient.delete("https://localhost:44324/api/login?stu_id="+sid);

}
}



