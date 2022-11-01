import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  edu: Education [] = [];

  constructor(private sEducation: EducationService, private tokenService: TokenService) { }

  isLogged = false; 

  ngOnInit(): void {
    this.loadEdu();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadEdu(): void {
    this.sEducation.lista().subscribe(data => { this.edu = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sEducation.delete(id).subscribe(
        data => { 
          this.loadEdu();
        }, err => {
          alert("No se pudo borrar la educación");
        }
      )
    }
  }

}
