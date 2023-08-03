import React from 'react'
import { Container, Content } from './style'
import { Button } from '../Generics/Button'
import { Input } from '../Generics/Input'
import useRequest from '../../hooks/useRequest'
import { message } from 'antd'

const SignUp = () => {
  const request = useRequest()
  const [body, setBody] = React.useState({})



  const onChange = ({ target: { value, placeholder, name } }) => {
    setBody(
      {
        ...body,
        [placeholder]: value,
      }
    )

  }
  const onSubmit = async () => {


    request({
      url: `user/register`,
      method: "POST",
      body,
      me: true,
    })
      .then((res) => res.username[0] === "A user with that username already exists." && message.warning("A user with that username already exists."))
      .catch((err) => { console.log(err.message, "======================ERRRRRRRRRRRRRRRRR===============================================================") })
      .finally(() => console.log("Tugadi"))
  };

  return (
    <Container>
      <Content>
        <div className='subtitle'>Sign Up</div>
        <div className='flex flex-col gap-3'>
          <Input placeholder="username" onChange={onChange} type="text" />
          <Input name='password' placeholder="password" onChange={onChange} type="password" />
          <Input name='first_name' placeholder="first_name" onChange={onChange} type="text" />
          <Input name='last_name' placeholder="last_name" onChange={onChange} type="text" />
          <div>

            <Input name='email' placeholder="email" onChange={onChange} type="email" />
            <label htmlFor="as" className='pt-4' style={{ cursor: "pointer" }}>
              <input id='as' style={{ cursor: "pointer" }} type="checkbox" />
              <span className='info ml-3'>Remember me</span>
            </label>
          </div>
        </div>
        <Button w={"100%"} h={"44"} onClick={onSubmit}></Button>
      </Content>
    </Container>

  )
}

export default SignUp