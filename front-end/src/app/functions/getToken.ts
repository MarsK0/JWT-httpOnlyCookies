import axios from "axios"

async function getToken(payload: string){
  await axios.get("http://localhost:3333/auth", {
    withCredentials: true,
    data: {
      user: payload
    }
  })
}

export default getToken