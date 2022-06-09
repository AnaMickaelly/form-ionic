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
      <IonHeader></IonHeader>
      <IonToolbar>
        <IonTitle color="dark">Formulário de Cadastro</IonTitle>
      </IonToolbar>
      <IonContent fullscreen>
        <form>
          <IonList>
            <IonItemDivider color="secondary">Nome</IonItemDivider>
            <IonItem>
              <IonInput
                value={name}
                type="text"
                placeholder="nome"
                onIonChange={(e) => setName(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItemDivider color="secondary">CPF</IonItemDivider>
            <IonItem>
              <IonInput
                value={cpf}
                type="text"
                placeholder="CPF"
                onIonChange={(e) => setCpf(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItemDivider color="secondary">Senha</IonItemDivider>
            <IonItem>
              <IonInput
                type="password"
                value={password}
                placeholder="senha"
                onIonChange={(e) => setPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItemDivider color="secondary">E-mail</IonItemDivider>
            <IonItem>
              <IonInput
                value={email}
                placeholder="e-mail"
                color="dark"
                type="email"
                onIonChange={(e) => setEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonList>
          <IonButton
            fill="solid"
            size="default"
            expand="block"
            onClick={handlerSubmit}
            color="secondary"
          >
            enviar
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Home;
