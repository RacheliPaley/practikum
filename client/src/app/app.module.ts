import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AddChildComponent } from './add-child/add-child.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    FormComponent,
    AddChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule,MatFormFieldModule,
    HttpClientModule,
    MatMenuModule,MatToolbarModule,MatIconModule
    ,MatInputModule,MatSelectModule,MatBottomSheetModule
    ,CdkAccordionModule,MatExpansionModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
