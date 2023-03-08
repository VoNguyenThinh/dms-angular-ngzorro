import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, '../assets/locales/', '.json');
}

@NgModule({
   exports: [
      CommonModule,
      TranslateModule
   ]
})
export class SharedTranslateModule {}
