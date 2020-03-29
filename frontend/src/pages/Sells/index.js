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

export default function Sells() {
  const [sells, setSells] = useState([]);
  const history = useHistory();
  console.log(sells);

  useEffect(() => {
    api.get("/sells").then(res => {
      setSells(res.data);
    });
  }, []);

  function handleSell() {
    history.push("/clients");
  }

  return (
    <ProfileContainer>
      <Header>
        <Img src={logoImg} alt='Comfort T.I' />
        <Button onClick={handleSell}>
          <FiPlus size={18} color='#38618C' />
        </Button>{" "}
      </Header>
      <Ulc>
        {sells.map(sell => (
          <Lic key={sell.id}>
            {/* <Strongc>Vendas:</Strongc>
                                <Pc>{sell.title}</Pc> */}
            <Strongc> Nome: </Strongc> <Pc> {sell.name} </Pc>
            <Strongc> Telefone: </Strongc> <Pc> {sell.phone} </Pc>
            <Strongc> endereço: </Strongc> <Pc> {sell.endereco} </Pc>
            <Strongc> Vencimento: </Strongc> <Pc> {sell.vencimento} </Pc>
            <Strongc> Valor: </Strongc>{" "}
            <Pc>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(sell.value)}
            </Pc>
          </Lic>
        ))}
      </Ulc>
    </ProfileContainer>
  );
}
