import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diplome',
  templateUrl: './diplome.component.html',
  styleUrls: ['./diplome.component.css']
})
export class DiplomeComponent implements OnInit {

Lycee:string;
date1:string;
diplome1 :string;
Institut:string;
date2:string;
diplome2:string;

  constructor() { 
this.Lycee="lycee mixte";
this.date1="2022-2023";
this.diplome1="baccalauréat ";
this.Institut="institut supérieure des études technologique de Sidi Bouzid";
this.date2="2023-2024";
this.diplome2="licence en technologie d'informatique";




  }




  ngOnInit(): void {
  }

}
