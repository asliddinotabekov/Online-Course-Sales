
import React from 'react';

import { VideoIdContext } from '../../Context/VideoId';

export const VideoPage = (props) => {
  const [videoId] = React.useContext(VideoIdContext)
  console.log(videoId, "videoId=============================================")
  return (
    <>
      <div>
        {
          <div className="main w-full">
            <video controls>
              <source type="video/mp4" src={`http://127.0.0.1:8000/media${videoId?.file}`} />
            </video>
            {videoId?.file}
          </div>
        }

      </div>
    </>

  );
};

export default VideoPage
