import React from 'react'
import { Container, Content } from './style'
import { Button } from '../Generics/Button'
import { Input } from '../Generics/Input'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'


const SignIn = () => {

  const navigate = useNavigate()
  const [body, setBody] = React.useState({})
  const [button, setButton] = React.useState(true)



  const onChange = ({ target: { value, placeholder, name } }) => {
    setBody(
      {
        ...body,
        [placeholder]: value,
      }
    )

  }

  console.log(body, "Body")
  for (let i in body) {
    if (body[i] === "" && !button) {
      setButton(false)
      console.log("byoldi");
    }
    else {
      console.log("ish")
    }
  }



  const onSubmit = () => {
    fetch("http://127.0.0.1:8000/user/token/", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res?.access) {

          navigate("/dashboard");
          localStorage.setItem("token", res?.access);
          localStorage.setItem("refresh_token", res?.refresh)
          message.info("Successed login")

        } else {
          message.warning("Something went wrong please try again")
          console.log("Dangers ")
        }
        if ("username" in body) {
          localStorage.setItem("usr", body["username"])
        }
      })
  };

  return (
    <Container>
      <Content>
        <div className='subtitle'>Sign In</div>
        <Input placeholder="username" onChange={onChange} type="name" />
        <div>
          <Input name='password' placeholder="password" onChange={onChange} type="password" />
          <label htmlFor="as" className='pt-4' style={{ cursor: "pointer" }}>
            <input id='as' style={{ cursor: "pointer" }} type="checkbox" />
            <span className='info ml-3'>Remember me</span>
          </label>
        </div>
        <Button w={"100%"} h={"44"} onClick={onSubmit}></Button>
      </Content>
    </Container>

  )
}

export default SignIn