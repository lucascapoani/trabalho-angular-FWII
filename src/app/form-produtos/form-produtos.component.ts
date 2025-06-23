import { Component } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  standalone: false,
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  produto: any = { id: 0, nome:"", preco:0};
  listProdutos: any[] = [];

  cadastrarProduto(){
    this.listProdutos.push(this.produto);
    alert("Produto cadastrado com sucesso!");
    this.produto = { id: 0, nome:"", preco:0};
  }
}
