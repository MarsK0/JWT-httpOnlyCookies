import { Router } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import handleCookies from './handleCookies'

dotenv.config({path: __dirname + "/.env"})

const routes = Router()

routes.get('/auth', async (req, res) => {
  const user = req.body
  const token = jwt.sign(user, process.env.JWT_SECRET!, {expiresIn: 300})

  res.cookie("auth", token, {
    secure: true,
    httpOnly: true,
    sameSite: 'none',
  })
  console.log("Cookie JWT enviado")
  res.status(200).send('OK')
})

routes.get('/getcookie', async(req, res) => {
  res.cookie("teste", "cookie", {
    secure: true,
    httpOnly: true,
    sameSite: 'none',
  })
  console.log("Cookie genérico enviado")
  res.status(200).send('ok')
})

routes.get('/sendcookies', async(req, res) => {
  const cookies = req.headers.cookie ? handleCookies(req.headers.cookie): ""
  console.log(cookies)

  res.status(200).send('ok')
})

export default routes
