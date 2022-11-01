import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  pro: Project [] = [];

  constructor(private sProject: ProjectService, private tokenService: TokenService) { }

  isLogged = false; 

  ngOnInit(): void {
    this.loadPro();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadPro(): void {
    this.sProject.lista().subscribe(data => { this.pro = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sProject.delete(id).subscribe(
        data => { 
          this.loadPro();
        }, err => {
          alert("No se pudo borrar la educación");
        }
      )
    }
  }

}
