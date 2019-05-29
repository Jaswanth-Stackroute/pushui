import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
    @Input() bid:string;
    data;
  constructor() {
   }

  ngOnInit() {
    console.log("id is : ",this.bid);
  }
  test(){
    this.data=true;
  }

}
