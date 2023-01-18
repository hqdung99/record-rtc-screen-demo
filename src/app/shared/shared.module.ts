import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ButtonComponent,
  IconButtonComponent
} from "./components";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    IconButtonComponent
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent
  ],
})
export class SharedModule {}
