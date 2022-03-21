import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { VideosComponent } from './components/videos/videos.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { BookTicketComponent } from './components/book-ticket/book-ticket.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResultsComponent,
    LatestNewsComponent,
    NextMatchComponent,
    VideosComponent,
    OurBlogComponent,
    BookTicketComponent,
    AddPlayerComponent,
    AddMatchComponent,
    SignupComponent,
    AddAdminComponent,
    DashboardAdminComponent,
    DisplayMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
