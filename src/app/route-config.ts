import { Routes } from '@angular/router';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { ProductDetailsComponent } from '@components/product-details/product-details.component';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';
import { ViewCartComponent } from '@components/view-cart/view-cart.component';
import { LoginComponent } from '@components/customer/login/login.component';
import { RegisterComponent } from '@components/customer/register/register.component';

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
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        // this is the default route; must be the last one
        path: '**',
        component: PageNotFoundComponent
    }
];