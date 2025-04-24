import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
// import { HeaderComponent } from './components/header/header.component';
// import { LayoutComponent } from './components/layout/layout.component';
// import { SidebarComponent } from './layout/sidebar/sidebar.component';
// import { FooterComponent } from './layout/footer/footer.component';
// import { SingUpComponent } from './components/sing-up/sing-up.component';
// import { SingInComponent } from './components/sing-in/sing-in.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
