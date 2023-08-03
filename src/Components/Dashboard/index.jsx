
import { useNavigate } from "react-router-dom";
import ColourCard from "../ColorCard";
import React from 'react'
import Input from '../Generics/Input'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import { Outlet, useOutlet } from 'react-router-dom';




export default function Cards(props) {
  const [promacode, setPromaCode] = React.useState()

  const handle = () => {
    fetch("https://checkout.test.paycom.uz/api", {
      headers: {
        'X-Auth': '644b51709d8465a45ad94f80',
      },
      method: "POST",
      body: JSON.stringify({
        "id": 123,
        "method": "cards.create",
        "params": {
          "card": {
            "number": "8600 1434 1777 0323",
            "expire": "03/99"
          },
          "save": true
        }
      })
    }).then((res) => res.json())
      .then((res) => { localStorage.setItem("pay_tok1", res?.result.card.token) })
  }


  const nexthandle = () => {
    fetch("https://checkout.test.paycom.uz/api", {
      headers: {
        'X-Auth': '644b51709d8465a45ad94f80',
      },
      method: "POST",
      body: JSON.stringify({
        "id": 123,
        "method": "cards.get_verify_code",
        "params": {
          "token": localStorage.getItem("pay_tok1")
        }
      })
    }).then((res) => res.json())
      .then((res) => console.log(res, ">>>>>>>>>>>>reault 2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"))
  }




  return (
    <div>
      <div className=' border w-52 h-52'>
        <Card className="mt-6 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2" >
              Pay me
            </Typography>
            <Input place />
            <Input />
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => handle()}>1</Button>
            <Button onClick={() => nexthandle()}>2</Button>
          </CardFooter>
        </Card>

      </div>
    </div>
    // <div className="flex w-full rounded-md flex-col  gap-3 px-16 py-5 pt-4">
    //   <ColourCard colour={'rgb(0,123,255)'}></ColourCard>
    //   <ColourCard colour={'rgb(76,175,80)'}></ColourCard>
    //   <ColourCard colour='rgb(255,152,0)'></ColourCard>
    // </div>
  );
}
