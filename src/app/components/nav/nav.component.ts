import { Component, OnInit } from '@angular/core';

interface iItem {
  label:string;
  route:string;
  ativo:boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  itens: iItem[] = [
    {
      ativo:true,
      label:"home",
      route:"/home"
    },
    {
      ativo:false,
      label:"sobre",
      route:"/sobre"
    },
    {
      ativo:false,
      label:"contato",
      route:"/contato"
    }
  ]

  constructor() { }
// // fazendo com que todos os itens fiquem inativos
//   destacar(item: iItem) {
//     this.itens.forEach(
//       (item) => {
//         item.ativo = false
//       }
//     )

//     //dando destaque ao item
//     item.ativo = true;
//   }

  ngOnInit(): void {
  }

}
