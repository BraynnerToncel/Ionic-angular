import { Component, OnInit } from '@angular/core';
import { CantanteService } from 'src/app/cantante.service';
import { ActivatedRoute } from '@angular/router';
interface CantanteData{
  name: string;
}
@Component({
  selector: 'app-cantante',
  templateUrl: './cantante.page.html',
  styleUrls: ['./cantante.page.scss'],
})
export class CantantePage implements OnInit {

  information: CantanteData | null = null;
  constructor(private activatedRoute: ActivatedRoute, private cantanteService: CantanteService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.cantanteService.getDetail(id).subscribe((result: CantanteData) => {
      this.information = result;
    });
  }

}
