import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infogenerale',
  templateUrl: './infogenerale.component.html',
  styleUrls: ['./infogenerale.component.css']
})
export class InfogeneraleComponent implements OnInit {
  Qui_suis_je!:string;
  nom!: string;
  adresse!: string;
  telephone!: number;
  mail!: string;
  Permis!:string;

ngOnInit() {
  this.Qui_suis_je="J'étudie à l'Institut Supérieur d'Etudes Technologiques de Sidi Bouzid  Technologie de l'informatique', je me suis ensuite orienté vers le développement des systèmes d'information et j'aspire à approfondir mes connaissances dans ce domaine.";
  this.nom = 'wejden chouaibi';
  this.adresse = 'sidi bouzid,tunisia';
  this.telephone = 54149257;
  this.mail = 'wejdenchouaibi@gmail.com';
  this.Permis='Non';
  
}
}