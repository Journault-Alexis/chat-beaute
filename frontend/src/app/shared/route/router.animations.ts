import {animate, group, query, style, transition, trigger} from '@angular/animations';



export const animRoutes = [trigger('animRoutes', [
  transition('* <=> *', [

    query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' })
      , { optional: true }),
         group([
      query(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('0.7s ease-in-out', style({ transform: 'translateY(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('0.7s ease-in-out', style({ transform: 'translateY(-100%)' }))
      ], { optional: true }),
    ])
  ])
])
]

