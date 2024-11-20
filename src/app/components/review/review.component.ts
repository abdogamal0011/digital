import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
  animations:[trigger('backInRight', [
    state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
    transition(':enter', [
      animate('1s ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
      animate('1s ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
    ])
  ])
]
})
export class ReviewComponent {
  image2:string='./assets/image/client-1.png';
  image3:string='./assets/image/client-2.png';
  image4:string='./assets/image/client-3.png';
  image5:string='./assets/image/client-4.png';
  image6:string='./assets/image/client-5.png';
  image7:string='./assets/image/client-6.png';
  image8:string='./assets/image/client-7.png';
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
