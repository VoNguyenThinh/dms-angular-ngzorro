import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, '../../assets/locales/', '.json');
}

// export function HttpLoaderFactory(http: HttpClient) {
//    return new TranslateHttpLoader(http);
// }

@NgModule({
   imports: [
      HttpClientModule,
      TranslateModule.forChild({
         loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
         },
         defaultLanguage: 'vi',
         extend: true
      })
   ]
})
export class LazyLoadTranslateModule {
   constructor(protected translateService: TranslateService) {
      const currentLang = translateService.currentLang;
      translateService.currentLang = '';
      translateService.use(currentLang);
   }
}
