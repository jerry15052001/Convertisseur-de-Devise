import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  title = 'Convertisseur de devise';
  fcfa = new Devise('FCFA', 'XAF');
  euro = new Devise('Euro', 'EUR');
  dollar = new Devise('Dollar US', 'USD');
  yen_japonais = new Devise('Yen Japonais', 'JPY');
  livre_sterling = new Devise('Livre Sterling', 'GBP');
  franc_suisse = new Devise('Franc Suisse', 'CHF');
  dollar_canadien = new Devise('Dollar Canadien', 'CAD');
  yuan_chinois = new Devise('Yuan Chinois', 'CNY');
  dirham_uae = new Devise('Dirham UAE', 'AED');
  listeDevise = [
    this.dollar,
    this.fcfa,
    this.euro,
    this.yen_japonais,
    this.livre_sterling,
    this.franc_suisse,
    this.dollar_canadien,
    this.yuan_chinois,
    this.dirham_uae,
    
   
  ];
  depart = this.dollar;
  arrivee = this.euro;
  public value=0;
  public value2=0;

}

class Devise {
  name:String = '';
  code:String = '';
  constructor(name: string, code: string){
      this.name = name;
      this.code = code;
  }
}
