import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BlogManagementComponent } from './components/admin/blog-management/blog-management.component';
import { ComposeBlogComponent } from './components/admin/compose-blog/compose-blog.component';
import { LoginComponent } from './components/admin/login/login.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { TagsComponent } from './components/tags/tags.component';
import { TypesComponent } from './components/types/types.component';

const routes: Routes = [
  {path: 'admin/login', component:LoginComponent},
  {path: 'admin/blog', component:ComposeBlogComponent},
  {path: 'admin/blogs', component:BlogManagementComponent},
  {path: '', component:HomeComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'blogs', component:BlogListComponent},
  {path: 'types', component:TypesComponent},
  {path: 'tags', component:TagsComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
