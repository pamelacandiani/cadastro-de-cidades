import { Component, OnInit } from '@angular/core';
import { Cidade } from '../../cidade';
import { CidadeService } from '../cidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrl: './cidade.component.css'
})
export class CidadeComponent implements OnInit{

  cidade: Cidade[] = [];

  constructor(private service: CidadeService, private router: Router){}

  ngOnInit(): void {
  this.loadCidades();
  }

  loadCidades(){
    this.service.getCidades().subscribe({
      next: data => this.cidade = data
    })
  }

  delete(cidade: Cidade){
    this.service.delete(cidade).subscribe({
      next: () => this.loadCidades()
    })
  }

  create(){
    this.router.navigate(['cidades'])
  }
}
