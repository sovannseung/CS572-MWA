import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AboutusComponent } from "./aboutus.component";
import { ParamComponent } from "./params/param.component";
import { QueryComponent } from "./params/query.component";
import { FragmentComponent } from "./params/fragment.component";
import { ParentComponent } from "./parentchild/parent.component";
import { ChildComponent } from "./parentchild/child.component";
import { GuardsComponent } from "./guards/guards.component";

import { MyCanActivateGuard } from "./guards/mycanactivate.guard";
import { MyCanDeactivateGuard } from "./guards/mycandeactivate.guard";

const MY_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    // A redirect route requires a pathMatch property to tell the router how to match a URL to the path of a route.
    // The default matching strategy of Angular router is
    // to match the redirect route when the URL begins with the redirect route's prefix path.
    { path: 'params/route', redirectTo: '/', pathMatch: 'full' },
    { path: 'params/route/:id', component: ParamComponent },
    { path: 'params/query', component: QueryComponent },
    { path: 'params/fragment', component: FragmentComponent },
    {
        path: 'parentchild/parent', component: ParentComponent,
        children: [{ path: 'child', component: ChildComponent }]
    },
    // guards need to be initilized, add them to module!
    // canActivate when surfing to route
    // canDeactivate when surfing away from route
    { path: 'guards', component: GuardsComponent, canActivate: [MyCanActivateGuard], canDeactivate: [MyCanDeactivateGuard] },
    // ** for all routes that we don't recognize, 
    // Routes served from top to bottom so this should always come last!
    { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
