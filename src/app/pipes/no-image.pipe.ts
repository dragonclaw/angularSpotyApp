import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[], args?: any): any {
    if (!images) {
      return 'assets/img/No_Image_Available.png';
    }
    if (images.length > 0 ) {
      return images[0].url;
    } else {
      return 'assets/img/No_Image_Available.png';
    }
  }

}
