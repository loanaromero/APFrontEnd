import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s-experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  nombreE: string = '';
  descripE: string = '';

  constructor(private sExperience: SExperienceService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const exp = new Experience(this.nombreE, this.descripE);
    this.sExperience.save(exp).subscribe(data => { 
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    );
  }

}
