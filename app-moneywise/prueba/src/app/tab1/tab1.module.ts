import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

// Importar AngularFireModule y AngularFirestoreModule de @angular/fire
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    // Configurar Firebase con tus credenciales
    AngularFireModule.initializeApp({
      apiKey: 'TU_API_KEY',
      authDomain: 'TU_AUTH_DOMAIN',
      projectId: 'TU_PROJECT_ID',
      storageBucket: 'TU_STORAGE_BUCKET',
      messagingSenderId: 'TU_MESSAGING_SENDER_ID',
      appId: 'TU_APP_ID'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig), // Only if you need to initialize firebase app
    FirestoreModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
