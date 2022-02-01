import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/admin/login/login.component';
import { ComposeBlogComponent } from './components/admin/compose-blog/compose-blog.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { CommentsComponent } from './components/comments/comments.component';
import { TypesComponent } from './components/types/types.component';
import { TagsComponent } from './components/tags/tags.component';
import { TypesManagementComponent } from './components/admin/types-management/types-management.component';
import { BlogOverivewComponent } from './components/blog-overivew/blog-overivew.component';
import { BlogManagementComponent } from './components/admin/blog-management/blog-management.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComposeBlogComponent,
    NavBarComponent,
    HomeComponent,
    AboutMeComponent,
    BlogListComponent,
    BlogComponent,
    FooterComponent,
    CommentsComponent,
    TypesComponent,
    TagsComponent,
    TypesManagementComponent,
    BlogOverivewComponent,
    BlogManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMarkdownEditorModule.forRoot({ iconlibrary: 'fa' }),
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
