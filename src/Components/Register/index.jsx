import React from 'react';
import { Tabs } from 'antd';
import { signin, signup } from '../../assets/icons';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: <SignIn />,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: <SignUp />,
    children: `Content of Tab Pane 2`,
  },

];

const Register = () => {
  return (
    <div >

      <Tabs tabBarStyle={{ fontSize: "29px", }} defaultActiveKey="1" onChange={onChange} size="large" centered={true} items={[signin, signup].map((Icon, i) => {
        const id = String(i + 1);
        console.log(id)
        return {
          label: (
            <span>
              <Icon className='w-16 h-6' />
              <span>{id % 2 === 1 ? "Sign in" : "Sign Up"}</span>
            </span>
          ),
          key: id,
          children: id % 2 === 1 ? <SignIn /> : <SignUp />,
        };
      })} />;
    </div>
  )
}

export default Register 
