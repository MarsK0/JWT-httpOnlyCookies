import axios from "axios"

async function getCookie(){
  await axios.get("http://localhost:3333/getcookie", {
    withCredentials: true
  })
}

export default getCookie