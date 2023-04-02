import { LoginPageProps } from "./model";

const LoginPage = (props: LoginPageProps) => {
    let message;
    if(props.status === "loading"){
        message = "loading"
    } else if(props.status === "login"){
        message = "login =))"
    }else if(props.status === "error"){
        message= "error =((("
    }
  return (

    <div>
      {message}
    </div>
  )
}

export default LoginPage
