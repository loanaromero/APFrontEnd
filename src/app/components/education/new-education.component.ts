import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  nombreEd: string = '';
  descripEd: string = '';

  constructor(private sEducation: EducationService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const edu = new Education(this.nombreEd, this.descripEd);
    this.sEducation.save(edu).subscribe(data => { 
      alert("Educación añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    );
  }

}
