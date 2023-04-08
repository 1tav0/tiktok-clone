import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares
}) => {
  // const videoUrl = 'v16-webapp-prime.us.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/okyIxW3jgzvEukVluyf4o9UhIAH4QF3tCCAy5t/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3196&bt=1598&cs=0&ds=3&ft=_rKBMBnZq8ZmoXh3Cc_vjothsAhLrus&mime_type=video_mp4&qs=0&rc=ODY5Z2kzO2U1Z2Q1PDQ4NUBpM3FzOzo6ZnV1ajMzNzczM0BhLmJhYzNhNjYxYzE2MV5gYSNtX3FtcjRvcWZgLS1kMTZzcw%3D%3D&expire=1680316905&l=20230331204130944A160906D9AA0A044C&ply_type=2&policy=2&signature=2481f6ee8a9e3d6e8708363cb42a74f5&tk=tt_chain_token'
  const videoUrl = 'https://player.vimeo.com/external/314181352.sd.mp4?s=d2cd7a37f6250cd543e6d13209730b4bcf242130&profile_id=164&oauth2_token_id=57447761'
  
  const videoRef = useRef(null)//since we took away the controls property from the video we want to make it start playing when we tap the video we use a reference to that video
  const [playing, setPlaying] = useState(false)

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="video">
          {/* <h1>This is a video</h1> */}
          <video 
            className='video__player' 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loop
            onClick={onVideoPress}
            ref={videoRef}
          >
            <source src={videoUrl} />
          </video>
          {/* <iframe className='video__player' src="https://www.youtube.com/embed/yiZQKILX63M" title="Blueface asks Mike Tyson how many babymommas he has 😮😂"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}
          <VideoFooter 
            channel={ channel } 
            description={ description }
            song={ song }
          />
          <VideoSidebar 
            likes={ likes }
            messages={ messages }
            shares={ shares }
          />
    </div>
  )
}

export default Video

