import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'formaterTime'})
export class FormaterTime implements PipeTransform {
    
    transform(totalSeconds: number): string {
        
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        return `${hours}h:${minutes}m:${seconds}s`;
    }

}