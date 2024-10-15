import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrl: './cidade-form.component.css'
})

export class CidadeFormComponent implements OnInit{

  formGroupCidade: FormGroup;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private service: CidadeService,
    private FormBuilder: FormBuilder
    ){


    this.formGroupCidade = FormBuilder.group({
      id        : [''],
      cep       : [''],
      cidade    : [''],
      estado    : [''],
      populacao : ['']

    });
  }

  ngOnInit(): void {
    const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
    this.loadCidade(id);
  }

  loadCidade(id: number){
    this.service.getCidadesbyId(id).subscribe({
      next: data=> this.formGroupCidade.setValue(data)
    });
  }

  update(){
    this.service.uptade(this.formGroupCidade.value).subscribe({
      next: () => this.router.navigate(['cidade'])
    });
  }

  save(){
    this.service.save(this.formGroupCidade.value).subscribe({
      next:() => this.router.navigate(['cidade'])
    })
  }
}
