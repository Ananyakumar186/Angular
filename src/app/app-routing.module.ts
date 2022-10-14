import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { TpaComponent } from './components/tpa/tpa.component';
import { DevopsComponent } from './components/courses/devops/devops.component';
import { MeanComponent } from './components/courses/mean/mean.component';
import { RpaComponent } from './components/courses/rpa/rpa.component';
import { AdvJavaComponent } from './components/courses/adv-java/adv-java.component';
import { CoreJavaComponent } from './components/courses/core-java/core-java.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  
  {path: 'gallery', component: GalleryComponent},
  {path:'register', component:RegisterComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'tpa', component:TpaComponent},
  {path:'devops', component:DevopsComponent},
  {path:'mean', component:MeanComponent},
  {path:'rpa', component:RpaComponent},
  {path:'adv-java', component:AdvJavaComponent},
  {path:'core-java', component:CoreJavaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
