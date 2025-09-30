import { computed, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SpinnerService {
  private loading = signal<boolean[]>([]);
  computedIsLoading = computed<boolean>(() => !!this.loading().length);

  showSpinner(): void {
    this.loading.update((value) => ([
      ...value,
      true
    ]));
  }

  hideSpinner(): void {
    this.loading.update(() => {
      this.loading().pop();
      return [...this.loading()];
    });
  }
}