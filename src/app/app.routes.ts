import { Routes } from '@angular/router';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
    component: HomePageComponent
    },
    {path: 'catalog',
        component: CatalogPageComponent
    },
    {path: 'favorites',
        component: FavoritesPageComponent
    }
];
