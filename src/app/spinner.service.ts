import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

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
deleteEntry(reqno:number){
  return this._httpClient.delete("https://localhost:44324/api/login?regno="+reqno);

}
}
