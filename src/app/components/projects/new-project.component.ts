import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  nombreP: string;
  descripP: string;
  linkP: string;
  //img por defecto
  imgP: string;

  constructor(private sProject: ProjectService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const pro = new Project(this.nombreP, this.descripP, this.linkP, this.imgP);
    this.sProject.save(pro).subscribe(data => { 
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    );
  }

}
