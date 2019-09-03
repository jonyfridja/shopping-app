import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { RecipePageComponent } from './pages/recipe-page/recipe-page.component';
import { IngredientPageComponent } from './pages/ingredient-page/ingredient-page.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { IngredientPreviewComponent } from './components/ingredient-preview/ingredient-preview.component';
import { RecipePreviewComponent } from './components/recipe-preview/recipe-preview.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const routes = [
  {path:'', component: RecipePageComponent},
  {path:'recipe', redirectTo: ''},
  {path:'ingredient', component: IngredientPageComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    RecipePageComponent,
    IngredientPageComponent,
    AppNavComponent,
    IngredientFormComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    IngredientListComponent,
    IngredientPreviewComponent,
    RecipePreviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
