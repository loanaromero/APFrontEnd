import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  //proURL = 'http://localhost:8080/project/';
  proURL = 'https://backendlr.herokuapp.com/project/';

  constructor(private httpClient: HttpClient) {

  }

  public lista(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.proURL + 'list');
  }

  public detail(id: number): Observable<Project> {
    return this.httpClient.get<Project>(this.proURL + `detail/${id}`); 
  }

  public save(project: Project): Observable<any>{
    return this.httpClient.post<any>(this.proURL + 'create', project);
  }

  public update(id: number, project: Project): Observable<any>{
    return this.httpClient.put<any>(this.proURL + `update/${id}`, project);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proURL +`delete/${id}`);
  }
}
