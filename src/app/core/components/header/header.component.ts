import { Component } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, MenubarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuItems: MenuItem[] = [
    {
      icon: PrimeIcons.MICROCHIP_AI,
      label: 'Math',
      items: [
        {
          icon: PrimeIcons.TH_LARGE,
          label: 'Bases',
          routerLink: `/bases`
        },
        {
          icon: PrimeIcons.COG,
          label: 'Combinatorial analysis',
          routerLink: `/combinatorial-analysis`
        },
        {
          icon: PrimeIcons.SITEMAP,
          label: 'Graphs',
          routerLink: `/graphs`
        },
        {
          icon: PrimeIcons.CHART_SCATTER,
          label: 'Machine learning',
          routerLink: `/machine-learning`
        },
        {
          icon: PrimeIcons.BOLT,
          label: 'Numeric',
          routerLink: `/numeric`
        },
        {
          icon: PrimeIcons.OBJECTS_COLUMN,
          label: 'Sets',
          routerLink: `/sets`
        }
      ]
    },
    {
      icon: PrimeIcons.ID_CARD,
      label: 'Session',
      items: [
        {
          icon: PrimeIcons.SIGN_IN,
          label: 'Login',
          routerLink: `/auth/login`
        },
        {
          icon: PrimeIcons.SYNC,
          label: 'Reset Password',
          routerLink: `/auth/reset`
        },
        {
          icon: PrimeIcons.SIGN_OUT,
          label: 'Logout',
          routerLink: `/auth/logout`
        }
      ]
    }
  ];
}
