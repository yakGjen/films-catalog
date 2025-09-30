import { Component, DestroyRef, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SpinnerService } from '../../services/spinner.service';
import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auth.component',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  private spinnerService = inject(SpinnerService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  private authService = inject(AuthService);

  form: FormGroup = this.fb.group({
    // username: ['', Validators.required],
    username: [''],
    password: ['']
  });

  login(): void {
    this.spinnerService.showSpinner();

    this.authService.login()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.spinnerService.hideSpinner())
      )
      .subscribe((data) => {
        this.authService.setLoggedIn(true);
        this.router.navigate(['/films']);
      });
  }
}
