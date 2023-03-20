import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(enVuelo: boolean): string {
        return (enVuelo) ? 'vuela' : 'no vuela';
        
    }

}