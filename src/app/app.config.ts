// src/app/app.config.ts
import { provideRouter } from '@angular/router';
import { RouterModule } from '@angular/router';

export const appConfig = {
  providers: [
    provideRouter([]) // Inserisci le tue rotte qui se necessario
  ],
  imports: [
    RouterModule
  ]
};