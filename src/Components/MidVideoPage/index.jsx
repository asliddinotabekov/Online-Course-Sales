
import { navbar } from '../../utils/router';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { RouteFunctionContext } from '../../Context/RouteFunction';
import { useContext } from 'react';
import { PathContext } from '../../Context/Path';
import { NextPathContext } from '../../Context/NestedPath';


export const MidVideoPage = (props) => {
  // const [datas, setData] = useState([])
  // const navigate = useNavigate()
  // let request = { username: "asil" }
  // let request_parse = (new URLSearchParams(request)).toString()
  // useEffect(() => {
  //   fetch(
  //     `http://192.168.0.152:8000/course/purchased_course?${(request_parse)}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Token ${localStorage.getItem("token")}`,
  //     },
  //   }
  //   ).then((res) => res.json())
  //     .then((res) => { setData(res) })
  //     .then((res) => { console.log(datas, "Responssssssssssssssssssssssssssssss") })
  // }, [])

  // console.log(datas, "datas")

  const location = useLocation()
  let { state } = location
  console.log(state)
  // const [pathes] = useContext(PathContext)
  // const [nestpathes] = useContext(NextPathContext)
  return (

    <>
      <div>
        {
          <div className="main w-full bg-brown-500">
            aaaaaaaaaaaa
            {/* <video src={ee} width="500" height="100" loop controls controlsList="nodownload">
            </video> */}

          </div>
        }

      </div>
    </>)
};

export default MidVideoPage
