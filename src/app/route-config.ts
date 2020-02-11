import { Routes } from '@angular/router';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductDetailsComponent } from '@components/product-details/product-details.component';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';

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
        // this is the default route; must be the last one
        path: '**',
        component: PageNotFoundComponent
    }
];