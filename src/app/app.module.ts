import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';

import {  NbAuthModule, NbAuthSimpleToken, NbDummyAuthStrategy, NbPasswordAuthStrategy } from '@nebular/auth';
import { GeneralModule } from './components/general/general.module';
import { NbAccessChecker, NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { RoleProviderService } from './services/role.provider.service';


class PayloadDummy extends NbAuthSimpleToken {
  protected override payload = {
    role: 'test'
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbDummyAuthStrategy.setup({
          name: 'email',
          token: {
            class: PayloadDummy
          }
        })
      ],
      forms: {
        login: {
          redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
          rememberMe: true,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
          redirect: {
            success: '/main',
            failure: null, // stay on the same page
          },
         
        }
      },
    }),
    NbSecurityModule.forRoot({
      accessControl: {
        test: {
          view: ['dashboard', 'logout', 'profile'],
          create: '',
          update: []
        }
      },
    }),
    GeneralModule
  ],
  providers: [
    {provide: NbRoleProvider, useClass: RoleProviderService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
