import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './data.service';
/*
import { Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent},
  {path:'', component: HomeComponent}
]
  */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
