"use server"

export const handleLogin = ({username , password } : {username : string , password : string}) => {
  try {
    console.log('username' , username)
    console.log('password' , password)
  }catch (err) {
    console.log(err)
  }
}