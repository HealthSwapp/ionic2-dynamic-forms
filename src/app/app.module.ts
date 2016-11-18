import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

////// COMPONENTS //////
import { CheckboxFieldComponent } from '../components/checkbox-field/checkbox-field'; 
import { CollectionFieldComponent } from '../components/collection-field/collection-field';
import { DynamicFieldComponent } from '../components/dynamic-field/dynamic-field';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form';
import { InputFieldComponent } from '../components/input-field/input-field';
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
    CheckboxFieldComponent,
    CollectionFieldComponent,
    DynamicFieldComponent,
    DynamicFormComponent,
    InputFieldComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CheckboxFieldComponent,
    CollectionFieldComponent,
    DynamicFieldComponent,
    DynamicFormComponent,
    InputFieldComponent    
  ],
  providers: [DynamicForm]
})
export class AppModule {}
