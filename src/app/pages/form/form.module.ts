import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { AddPokeComponent } from 'src/app/components/add-poke/add-poke.component';

@NgModule({
  declarations: [FormComponent, AddPokeComponent],
  imports: [CommonModule, FormRoutingModule, ReactiveFormsModule],
})
export class FormModule {}
