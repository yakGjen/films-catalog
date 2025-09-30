import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  public authService = inject(AuthService);

  logout(): void {
    // this.spinnerService.showSpinner();

    // this.authService.logout()
    //   .pipe(
    //     takeUntilDestroyed(this.destroyRef),
    //     finalize(() => this.spinnerService.hideSpinner())
    //   )
    
    //   .subscribe(() => {
    //     this.authService.setLoggedIn(false);
    //     this.authService.clearUserData();
    //   });
  }
}
