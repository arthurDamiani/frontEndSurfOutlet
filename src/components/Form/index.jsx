import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Stepper, Step, StepLabel, Container } from "@material-ui/core";
import UserData from "./UserData";
import AddressData from "./AddressData";
import {
  passwordValidator,
  cpfValidator,
  phoneValidator,
} from "../../models/Form";
import FormValidations from "../../contexts/FormValidations";
import api from "../../services/api";

import "./form.css";

function Form() {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(0);
  const [collectedData, setCollectedData] = useState({
    email: "",
    password: "",
    name: "",
    cpf: "",
    phone: "",
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  async function signUpUser({ name, password, email, cpf, phone }) {
    setCollectedData({
      email: email,
      password: password,
      name: name,
      cpf: cpf,
      phone: phone,
    });
    next();
  }

  async function handleLogin(collectedData) {
    const {
      email,
      password,
      neighborhood,
      cep,
      city,
      complement,
      state,
      number,
      street,
    } = collectedData;
    await api
      .post("/auth", {
        email: email,
        senha: password,
      })
      .then((res) => {
        sessionStorage.setItem("key", res.data.token);
        sessionStorage.setItem("authorized", true);
        api.defaults.headers.common["Authorization"] =
          "Bearer " + res.data.token;
        api
          .post("/endereco", {
            bairro: neighborhood,
            cep: cep,
            cidade: city,
            complemento: complement,
            estado: state,
            numero: number,
            rua: street,
          })
          .then(() => {
            alert("Conta cadastrada com sucesso!");
            history.push("/");
          })
          .catch(() => alert("Falha ao cadastrar endereço!"));
      })
      .catch(() => alert("Usuário ou senha incorretos!"));
  }

  async function signUpAddress({
    cep,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
  }) {
    setCollectedData({
      cep,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
    });
    await api
      .post("/usuario", {
        cpf: collectedData.cpf,
        email: collectedData.email,
        nomeCompleto: collectedData.name,
        senha: collectedData.password,
        telefone: collectedData.phone,
      })
      .then(() => {
        handleLogin(collectedData);
      })
      .catch(() => alert("Falha ao cadastrar usuário"));
  }

  const forms = [
    <UserData data={collectedData} onSubmit={signUpUser} signup={true} />,
    <AddressData
      data={collectedData}
      onSubmit={signUpAddress}
      goBack={goBack}
      signup={true}
    />,
  ];

  function next() {
    setCurrentStep(currentStep + 1);
  }

  function goBack() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <Container component="article" maxWidth="sm">
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
      </Stepper>
      <FormValidations.Provider
        value={{
          password: passwordValidator,
          cpf: cpfValidator,
          phone: phoneValidator,
        }}
      >
        {forms[currentStep]}
      </FormValidations.Provider>
    </Container>
  );
}

export default Form;
