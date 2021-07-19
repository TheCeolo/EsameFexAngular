import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  id: number
  place
  listAttrazioni
  constructor(public reqService: RequestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data.id
    })
    console.log(this.id)
    this.place = this.reqService.getPlace(this.id)
    this.listAttrazioni = this.place.attrazioni
    console.log("place",this.place)
    console.log("attrazioni",this.place.attrazioni)
  }

}
