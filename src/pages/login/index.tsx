import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import { handleLogin } from '../../services/login/requests';
import './styles.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handlerSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      username: email,
      password,
    };

    try {
      const response = await handleLogin(data);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Faça seu Login!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonToolbar></IonToolbar>
      <IonContent fullscreen>
        <form>
          <IonList>
            <IonItemDivider color="secondary">E-mail</IonItemDivider>
            <IonItem>
              <IonInput
                value={email}
                placeholder="digite seu melhor e-mail"
                type="email"
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItemDivider color="secondary">Senha</IonItemDivider>
            <IonItem>
              <IonInput
                type="text"
                value={password}
                placeholder="digite sua senha"
                color="dark"
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonList>
          <div className="container-button">
            <IonButton
              fill="solid"
              size="default"
              expand="block"
              onClick={handlerSubmit}
              color="secondary"
            >
              enviar
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
