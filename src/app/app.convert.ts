import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
name : 'convert'
})

export class ConvertPipe implements PipeTransform {
    constructor(){}
    
    transform(val : number,depart : String, arrivee : String) {
        let devises = new Map<string, number>();
        devises.set("FCFA", 1);
        devises.set("Euro", 655.957);
        devises.set("Dollar US", 575.500);
        devises.set("Yen Japonais", 5.075);
        devises.set("Livre Sterling", 768.250);
        devises.set("Franc Suisse", 626.750);
        devises.set("Dollar Canadien", 450.500);
        devises.set("Yuan Chinois", 90.000);
        devises.set("Dirham UAE", 156.250);

    for (const key of devises.keys()) {
        if(depart==key){
            if(devises.has(String(arrivee)))
                return Number(devises.get(String(depart)))*val/Number(devises.get(String(arrivee)));
        }   
    }
    return val;
    }
}