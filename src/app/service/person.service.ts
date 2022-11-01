import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { person } from '../model/person.model';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  //URL = 'http://localhost:8080/people/';
  URL = 'https://backendlr.herokuapp.com/people/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<person[]>{
    return this.httpClient.get<person[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<person> {
    return this.httpClient.get<person>(this.URL + `detail/${id}`); 
  }

  /*public save(Person: Education): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'create', education);
  }*/

  public update(id: number, Person: person): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Person);
  }

  /*public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL +`delete/${id}`);
  }*/
}
