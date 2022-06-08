import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { getUsers } from '../../services/users/requests';
import './styles.css';
const Details: React.FC = () => {
  const [users, setUsers] = useState<any>([]);

  const handleGetUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          {users?.items?.map((item: any) => (
            <IonCardContent key={item.cpf}>
              <h2> {item.nome} </h2>
              <p> {item.cpf} </p>
              <p> {item.email} </p>
            </IonCardContent>
          ))}
        </IonCard>
        <IonHeader collapse="condense">
          <IonToolbar></IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Details;
