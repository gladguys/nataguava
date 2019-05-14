import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    let  temp = value * 60;
    const hours = Math.floor((temp/3600));
    const minutes: number = Math.floor((temp/ 60)/60);
    const seconds=Math.floor(temp % 3600 % 60);
    return hours + ':' + minutes + ':' + seconds;
  }
}