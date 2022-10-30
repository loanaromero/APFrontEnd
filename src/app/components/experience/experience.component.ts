import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s-experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  exp: Experience [] = [];

  constructor(private sExperience: SExperienceService, private tokenService: TokenService) { 

  }

  isLogged = false;

  ngOnInit(): void {
    this.loadExp();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadExp(): void {
    this.sExperience.lista().subscribe(data => { this.exp = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperience.delete(id).subscribe(
        data => { 
          this.loadExp();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}


