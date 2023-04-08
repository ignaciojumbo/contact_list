import React, { useState } from "react";

function greetingF(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [age, setAge] = useState(29);

  const birthday = () => {
    // actualiza la edad
    setAge(age + 1);
  };

  return (
    <div>
      <h1>HOLA {props.name} desde componente funcional</h1>

      <h2>Tu edad es de: {age}</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
}

export default greetingF;
