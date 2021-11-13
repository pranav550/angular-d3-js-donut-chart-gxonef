import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { D3DonutComponent } from "./d3-donut/d3-donut.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [D3DonutComponent, AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
