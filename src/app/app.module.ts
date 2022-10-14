import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavcaroComponent } from './navcaro/navcaro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import{ MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { TpaComponent } from './components/tpa/tpa.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DevopsComponent } from './components/courses/devops/devops.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { MeanComponent } from './components/courses/mean/mean.component';
import { RpaComponent } from './components/courses/rpa/rpa.component';
import { AdvJavaComponent } from './components/courses/adv-java/adv-java.component';
import { CoreJavaComponent } from './components/courses/core-java/core-java.component';


@NgModule({
  declarations: [
    AppComponent,
    NavcaroComponent,
    AboutComponent,
    GalleryComponent,
    RegisterComponent,
    ContactComponent,
    TpaComponent,
    DevopsComponent,
    MeanComponent,
    RpaComponent,
    AdvJavaComponent,
    CoreJavaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatMenuModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxYoutubePlayerModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
