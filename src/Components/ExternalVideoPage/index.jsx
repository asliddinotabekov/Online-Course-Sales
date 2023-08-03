
import { navbar } from '../../utils/router';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { RouteFunctionContext } from '../../Context/RouteFunction';
import { useContext } from 'react';
import { PathContext } from '../../Context/Path';
import { NextPathContext } from '../../Context/NestedPath';
import { VideoIdContext } from '../../Context/VideoId';



export const ExternalVideoPage = (props) => {


  const location = useLocation()
  const [videoId] = React.useContext(VideoIdContext)
  console.log(videoId, "videoId=============================================")
  let { state } = location
  console.log(state)
  return (

    <>
      <div>
        {
          <div className="main w-full">
            <video src={videoId?.file} width="500" height="100" controls controlsList="nodownload">
            </video>
            {videoId?.file}
          </div>
        }

      </div>
    </>

  );

};
export default ExternalVideoPage


