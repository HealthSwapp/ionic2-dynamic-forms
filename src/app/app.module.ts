import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

////// COMPONENTS ////// 
import { DynamicFieldComponent } from '../components/dynamic-field/dynamic-field';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form';
////// COMPONENTS //////

////// PAGES //////
import { HomePage } from '../pages/home/home';
////// PAGES //////

////// PROVIDERS //////
import { DynamicForm } from '../providers/dynamic-form';
////// PROVIDERS //////

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
  providers: [DynamicForm]
})
export class AppModule {}
