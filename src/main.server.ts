import { NgModule, Type, ApplicationRef } from '@angular/core'; // Ajoutez les types manquants
import { ServerModule } from '@angular/platform-server';
import { AppServerModule as AppServerModuleImported } from './app/app.server.module'; // Importez le module serveur
import { AppComponent } from './app/app.component';

// Définissez AppServerModule comme module Angular
@NgModule({
  imports: [AppServerModuleImported, ServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

// Fonction bootstrap pour le rendu côté serveur
export default function bootstrap(): Type<{}> | (() => Promise<ApplicationRef>) {
  return AppServerModule;
}
