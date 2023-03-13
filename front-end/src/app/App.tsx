import { useState } from "react";
import getCookie from "./functions/getCookie";
import getToken from "./functions/getToken";
import isInputValid from "./functions/isInputValid";
import sendCookies from "./functions/sendCookies";

const App: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('')

  return (
    <>
      <input onChange={(e) => setInputVal(e.target.value)} 
             name="user" 
             type="text" 
             placeholder="Valor para o token JWT"
             required/>
      <button onClick={()=>isInputValid(inputVal) ? getToken(inputVal) : alert("Valor inválido. O valor do token JWT não deve estar vazio ou conter espaços!")}>GET JWT</button>
      <button onClick={()=>getCookie()}>GET COOKIE</button>
      <button onClick={()=>sendCookies()}>SEND COOKIEs</button>
    </>
  );
}

export default App;
