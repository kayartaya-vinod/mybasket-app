import { Routes } from '@angular/router';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductDetailsComponent } from '@components/product-details/product-details.component';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';
import { ViewCartComponent } from '@components/view-cart/view-cart.component';

export const routeConfig: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ProductListComponent
    },
    {
        path: 'details/:id',
        component: ProductDetailsComponent
    },
    {
        path: 'view-cart',
        component: ViewCartComponent
    },
    {
        path: 'customer',
        // works in Angular 8; but not in Angular 9
        // loadChildren: './customer/customer.module#CustomerModule'
        // In Angular 9, use the dynamic import function for the same
        loadChildren: () => import('./customer/customer.module')
            .then(m => m.CustomerModule)
    },
    {
        // this is the default route; must be the last one
        path: '**',
        component: PageNotFoundComponent
    }
];