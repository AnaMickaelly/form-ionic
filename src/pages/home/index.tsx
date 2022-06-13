import {
  IonButton,
  IonContent,
  IonImg,
  IonInput,
  IonItem,
  IonItemDivider,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import img from '../../resources/imageflower.svg';
import { handleSaveUser } from '../../services/users/requests';
import './styles.css';

const Home: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [cpf, setCpf] = useState<string>();

  const handlerSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      nome: name,
      cpf,
      email,
      senha: password,
      conf_senha: password,
      conf_email: email,
      id_usuario_perfil: 1,
    };

    try {
      const response = await handleSaveUser(data);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle className="toolbar" color="tertiary">
          Formulário de Cadastro
        </IonTitle>
      </IonToolbar>
      <div className="image">
        <IonImg src={img}></IonImg>
      </div>
      <IonContent fullscreen>
        <form>
          <IonList className="list-inputs">
            <IonItemDivider className="list-style-label" color="tertiary">
              Nome
            </IonItemDivider>
            <IonItem>
              <IonInput
                className="list-style"
                value={name}
                type="text"
                placeholder="digite seu nome"
                onIonChange={(e) => setName(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItemDivider className="list-style-label" color="tertiary">
              CPF
            </IonItemDivider>
            <IonItem>
              <IonInput
                className="list-style"
                value={cpf}
                type="text"
                placeholder="digite seu CPF"
                onIonChange={(e) => setCpf(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItemDivider className="list-style-label" color="tertiary">
              Senha
            </IonItemDivider>
            <IonItem>
              <IonInput
                type="password"
                className="list-style"
                value={password}
                placeholder="digite sua senha"
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItemDivider className="list-style-label" color="tertiary">
              E-mail
            </IonItemDivider>
            <IonItem>
              <IonInput
                className="list-style"
                value={email}
                placeholder="digite seu e-mail"
                color="dark"
                type="email"
                onIonChange={(e) => setEmail(e.detail.value!)}
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
            >
              enviar
            </IonButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Home;
