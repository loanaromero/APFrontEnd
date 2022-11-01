import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Experience } from '../model/experience';


@Injectable({
  providedIn: 'root'
})
export class SExperienceService {
  //expURL = 'http://localhost:8080/explab/';
  expURL = 'https://backendlr.herokuapp.com/explab/';

  constructor(private httpClient: HttpClient) { 

  }

  public lista(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.expURL + 'list');
  }

  public detail(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(this.expURL + `detail/${id}`); 
  }

  public save(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experience);
  }

  public update(id: number, experience: Experience): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experience);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL +`delete/${id}`);
  }
}
