import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.scss']
})
export class ListPlaceComponent implements OnInit {
  listLocalita = []
  constructor( public reqService : RequestService) { }

  ngOnInit(): void {
    this.listLocalita = this.reqService.getAllPlace()
    console.log(this.listLocalita)
  }

}
