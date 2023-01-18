import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ButtonComponent
} from "./components";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ],
})
export class SharedModule {}
