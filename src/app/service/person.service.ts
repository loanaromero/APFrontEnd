import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { person } from '../model/person.model';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  URL = 'http://localhost:4200/people/';
  //URL = environment.URL + 'people/';

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<person> {
    return this.http.get<person>(this.URL+'get/profile');
  }
}
