import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    
    transform(value: any, enMayusculas: boolean = true): string {
        return (enMayusculas) ? value.toUpperCase() : value.toLowerCase();
    }
    
    

}