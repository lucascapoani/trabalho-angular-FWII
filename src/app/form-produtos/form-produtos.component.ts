import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  standalone: false,
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  produto: any = { id: 0, nome:"", preco:0};
  listProdutos: any[] = [];
  @Output() onSalvar = new EventEmitter<any>();

  cadastrarProduto(){
    this.onSalvar.emit(this.produto);
    alert("Filme cadastrado com sucesso!");
    this.produto = { id: 0, nome:"", preco:0};
  }
}
