import {
    transition,
    trigger,
    query,
    style,
    animate,
    group
  } from '@angular/animations';
  
  
  export const slideInAnimation =
        trigger('routeAnimations', [          
          transition('Users => User', [
            query(':enter, :leave', 
                  style({ opacity: 0 }), 
                  { optional: true }),
            group([
              query(':enter', 
                    [style({ opacity: 0, transform: 'translateX(100%)' }), animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))], 
                    { optional: true }),
              query(':leave', 
                    [style({ opacity: 1, transform: 'translateX(0%)' }), animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateX(-100%)' }))
              ], { optional: true }),
            ])
          ]),
          
          transition('User => Users', [
            query(':enter, :leave', 
                  style({ opacity: 0 }), 
                  { optional: true }),
            group([
              query(':enter', 
                    [style({ opacity: 0, transform: 'translateX(-100%)' }), animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))], 
                    { optional: true }),
              query(':leave', 
                    [style({ opacity: 1, transform: 'translateX(0%)' }), animate('0.5s ease-in-out', style({ opacity: 0, transform: 'translateX(100%)' }))
                    ], { optional: true }),
            ])
          ])
        ]);