import { Component, effect, inject, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, NgxSpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public spinner = inject(NgxSpinnerService);
  private spinnerService = inject(SpinnerService);
  private computedIsLoading: Signal<boolean> = this.spinnerService.computedIsLoading;

  constructor() {
    effect(() => {
      this.computedIsLoading() ? this.spinner.show() : this.spinner.hide();
    });
  }
}
