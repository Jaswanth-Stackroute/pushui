import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { IStudent } from '../student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students:any ={
      "request": {
          "filters": {
              "userId": [
                  "2ea37912-ce7d-44c0-8816-34be186ad05c",
                  "6f324db7-32a5-4437-a451-35cf53269aaf"
              ]
          }
      }
    };
  public _url:string = 'https://camino.stackroute.com/api/user/v1/search';
  public _token:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmMzU5MzdlOWZmY2U0OWVjOTFhMWM2ZjNiMGRkODNjZSJ9.-TFevs_hwibGVswDBJhhgcJ3I4jEi1_dWuiNHsqMOoc';
  lstStudents: IStudent[];
  constructor(private _studentService: StudentService) { }

  ngOnInit() {
    this._studentService.getStudents(this.students,this._url,this._token).subscribe(data=>{this.lstStudents = data;});
  }

} 