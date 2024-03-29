import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';

// --------------Import module ng-Zorro----------------------------------//
import { NGZorroModule } from './modules/ng-zorro.module';
import { CookieService } from 'ngx-cookie-service';
import { Interceptor } from './api/interceptor';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
registerLocaleData(en);

export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, '../assets/locales/', '.json');
}

@NgModule({
   declarations: [AppComponent, NotFoundPageComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      NGZorroModule,
      ReactiveFormsModule,
      TranslateModule.forRoot({
         loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
         },
      }),
      NgxLoadingModule.forRoot({
         animationType: ngxLoadingAnimationTypes.circleSwish
      })
   ],
   providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }, CookieService],
   bootstrap: [AppComponent]
})
export class AppModule {}
