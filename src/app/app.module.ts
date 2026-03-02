import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListResMalekrahalComponent } from './list-res-malekrahal/list-res-malekrahal.component';
import { DetailResMalekrahalComponent } from './detail-res-malekrahal/detail-res-malekrahal.component';
import { AddResMalekrahalComponent } from './add-res-malekrahal/add-res-malekrahal.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListResMalekrahalComponent,
    DetailResMalekrahalComponent,
    AddResMalekrahalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
