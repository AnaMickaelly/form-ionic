import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonItemDivider,
  IonList,
  IonPage,
  IonTitle,
} from '@ionic/react';
import { useState } from 'react';
import img from '../../resources/LoginImage.svg';
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
    <IonPage className="page-login">
      <IonHeader>
        <IonTitle className="toolbar" color="tertiary">
          Faça seu Login!
        </IonTitle>
      </IonHeader>
      <IonContent fullscreen>
        <div className="image-girl">
          <IonImg src={img}></IonImg>
        </div>
        <form className="form-style">
          <IonList className="list-inputs">
            <IonItemDivider className="list-style-label" color="tertiary">
              E-mail
            </IonItemDivider>
            <IonItem>
              <IonInput
                className="list-style"
                value={email}
                placeholder="digite seu melhor e-mail"
                type="email"
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItemDivider className="list-style-label" color="tertiary">
              Senha
            </IonItemDivider>
            <IonItem>
              <IonInput
                className="list-style"
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
              color="tertiary"
              className="button"
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
