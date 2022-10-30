import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  edu: Education = null;

  constructor(private sEducation: EducationService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducation.detail(id).subscribe(data => { 
      this.edu = data;
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducation.update(id, this.edu).subscribe(data => { this.router.navigate(['']);
      }, err => { 
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    )
  }

}
