import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

////// COMPONENTS //////
import { CheckboxFieldComponent } from '../components/checkbox-field/checkbox-field'; 
import { CollectionFieldComponent } from '../components/collection-field/collection-field';
import { DynamicFieldComponent } from '../components/dynamic-field/dynamic-field';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form';
import { InputFieldComponent } from '../components/input-field/input-field';
import { SegmentedFieldComponent } from '../components/segmented-field/segmented-field';
import { SelectFieldComponent } from '../components/select-field/select-field';
////// COMPONENTS //////

////// PAGES //////
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
////// PAGES //////

////// PROVIDERS //////
import { DynamicForm } from '../providers/dynamic-form';
import { SchemaForm } from '../providers/schema-form';
import { SchemaModel } from '../providers/schema-model';
////// PROVIDERS //////

@NgModule({
  declarations: [
    MyApp,
    FormPage,
    HomePage,
    CheckboxFieldComponent,
    CollectionFieldComponent,
    DynamicFieldComponent,
    DynamicFormComponent,
    InputFieldComponent,
    SegmentedFieldComponent,
    SelectFieldComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FormPage,
    HomePage,
    CheckboxFieldComponent,
    CollectionFieldComponent,
    DynamicFieldComponent,
    DynamicFormComponent,
    InputFieldComponent,
    SegmentedFieldComponent,
    SelectFieldComponent  
  ],
  providers: [DynamicForm, SchemaForm, SchemaModel]
})
export class AppModule {}
