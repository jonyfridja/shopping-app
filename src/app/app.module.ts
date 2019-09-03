import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { IngredientPageComponent } from './pages/ingredient-page/ingredient-page.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';

const routes = [
  {path:'', component: RecipePageComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    RecipePageComponent,
    IngredientPageComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
