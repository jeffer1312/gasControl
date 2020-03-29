import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { FiPlus } from "react-icons/fi";
import {
  ProfileContainer,
  Header,
  Button,
  Ulc,
  Lic,
  Buttonc,
  Strongc,
  Pc,
  Img
} from "./styles";
import api from "../../services/api";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const history = useHistory();
  console.log(clients);

  useEffect(() => {
    api.get("/clients").then(res => {
      setClients(res.data);
    });
  }, []);

  function handleSellClient(client) {
    const { id, adress, phone, name } = client.client;
    console.log(client);
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("adress", adress);
    //localStorage.setItem("cliente", id);
    history.push("/NewSells");
  }

  return (
    <ProfileContainer>
      <Header>
        <Img src={logoImg} alt='Comfort T.I' />
      </Header>
      <Ulc>
        {clients.map(client => (
          <Lic key={client.id}>
            {/* <Strongc>Vendas:</Strongc>
                                <Pc>{sell.title}</Pc> */}
            <Strongc> Nome: </Strongc> <Pc> {client.name} </Pc>
            <Strongc> Telefone: </Strongc> <Pc> {client.phone} </Pc>
            <Strongc> endereço: </Strongc> <Pc> {client.adress} </Pc>
            <Button
              onClick={() => {
                handleSellClient({ client });
              }}>
              <FiPlus size={20} color='#a8a8b3' />
            </Button>
          </Lic>
        ))}
      </Ulc>
      <Link to='/'>Voltar</Link>
    </ProfileContainer>
  );
}
