import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CantanteService } from 'src/app/cantante.service';
@Component({
  selector: 'app-cantantes',
  templateUrl: './cantantes.page.html',
  styleUrls: ['./cantantes.page.scss'],
})
export class CantantesPage implements OnInit {

  results: Observable<any>;
  constructor(private cantanteService: CantanteService) { 
    this.results = this.cantanteService.getCantantes();
  }

  ngOnInit() {
  }

}