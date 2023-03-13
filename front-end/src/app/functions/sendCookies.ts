import axios from "axios"

async function sendCookies(){
  await axios.get("http://localhost:3333/sendcookies", {
    withCredentials: true
  })
}

export default sendCookies