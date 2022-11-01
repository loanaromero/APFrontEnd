import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person: person = null;

  constructor(public personService: PersonService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadPerson();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadPerson(){
    this.personService.detail(1).subscribe(data => {
      this.person = data;
    })
  }
}
