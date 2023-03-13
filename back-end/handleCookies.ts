interface Cookie{
  name: string;
  value: string;
}

function handleCookies(reqCookies: string): Array<Cookie>{
  const cookies: Array<string> = reqCookies.split(";")
  const cookieObjects: Array<Cookie> = []

  cookies.forEach((element) => {
    const nameAndValue = element.split("=")
    const cookieObj: Cookie = {
      name: nameAndValue[0],
      value: nameAndValue[1]
    }

    cookieObjects.push(cookieObj)
  })


  return cookieObjects
}

export default handleCookies