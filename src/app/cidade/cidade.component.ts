import { Component, OnInit } from '@angular/core';
import { Cidade } from '../../cidade';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrl: './cidade.component.css'
})
export class CidadeComponent implements OnInit{

  cidade: Cidade[] = [
    {
        "CEP": 1,
        "Cidade": "ITU",
        "Estado": "SÃO PAULO",
        "Populacao": 200.000
    },
  ]



  ngOnInit(): void {
   
  }

}
