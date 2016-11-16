import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { DynamicFieldComponent } from '../components/dynamic-field/dynamic-field';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DynamicFieldComponent,
    DynamicFormComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DynamicFieldComponent,
    DynamicFormComponent
  ],
  providers: []
})
export class AppModule {}
