import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-aulas';
  nomes = [
    new Pessoa(1, 'Bonieky', 90),
    new Pessoa(2, 'Paulo', 20),
    new Pessoa(3, 'Fulano', 40),
    new Pessoa(4, 'Cicrano', 30),
    new Pessoa(5, 'Beltrano', 80),
    new Pessoa(6, 'João', 5)
  ];
  //nomePrincipal = this.nomes[0];
  nomePrincipal = 'Carlos';

  showAviso = true;
  avisoMsg = 'Este é um aviso!';

  hideInput = true;

  imagem = 'https://www.google.com.br/google.jpg';

  tamanhoFonte = '25px';

  corPrincipal = '#FF0000';

  trocarCor = function(cor) {
    this.corPrincipal = cor;
  }

  clicou = function(pessoa: Pessoa) {
    alert("Clicou em: "+pessoa.nome+' '+pessoa.getTipo());
  }

  trocarNome = function(novoNome) {
    this.nomePrincipal = novoNome;
  }
}