import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import { cardSharp, listSharp, logInSharp } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Details from './pages/details';
import Home from './pages/home';
import Login from './pages/login';
/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="login" href="/login">
            <IonIcon color="tertiary" icon={logInSharp} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonIcon color="tertiary" icon={cardSharp} />
            <IonLabel>Formulário</IonLabel>
          </IonTabButton>
          <IonTabButton tab="details" href="/details">
            <IonIcon color="tertiary" icon={listSharp} />
            <IonLabel>Detalhes</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
