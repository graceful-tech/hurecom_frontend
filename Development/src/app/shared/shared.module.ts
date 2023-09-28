import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PrimengModule } from '../primeng/primeng.module';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [CommonModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    PrimengModule,
  ],
})
export class SharedModule {}
