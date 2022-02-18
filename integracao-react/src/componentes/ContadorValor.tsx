import React from "react";

interface IContadorValorProps {
  contador: number
}

const ContadorValor = (props: IContadorValorProps) => {
  return (
    <p>{props.contador}</p>
  );
}

export default ContadorValor