function isInputValid(val: string): boolean{
  if(val){
    if(val.indexOf(" ") === -1){
      return true
    }
  }

  return false
}

export default isInputValid