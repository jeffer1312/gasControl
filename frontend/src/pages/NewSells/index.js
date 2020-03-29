import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";
import {
  IncidentContainer,
  Content,
  Section,
  H1,
  P,
  Input,
  TextArea,
  Button,
  Form
} from "./style";

export default function NewSells() {
  const clientName = localStorage.getItem("name");
  const clientphone = localStorage.getItem("phone");
  const clientAdress = localStorage.getItem("adress");
  const client_id = localStorage.getItem("id");
  const [vencimento, setVencimento] = useState("");
  const [value, setValue] = useState();
  const history = useHistory();

  async function handleNewSell(e) {
    e.preventDefault();
    const data = {
      client_id,
      vencimento,
      value
    };
    //console.log(data);

    await api.post("/sells", data);
    history.push("/");
  }

  return (
    <IncidentContainer>
      <Content>
        <Section>
          <H1>Cadastrar venda</H1>
          <P>ver</P>
          <Link to='/clients'>
            <FiArrowLeft size={16} color='#e02041' />
          </Link>
        </Section>
        <Form onSubmit={handleNewSell}>
          <H1>{clientName}</H1>
          <Input
            required
            placeholder='vencimento'
            onChange={e => setVencimento(e.target.value)}></Input>
          <Input
            required
            placeholder='value'
            onChange={e => setValue(e.target.value)}></Input>

          <Button type='submit'>Cadastrar</Button>
        </Form>
      </Content>
    </IncidentContainer>
  );
}
