import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'


function Video({url,channel,description,song,likes,shares,messages}) {
    const [playing,setPlaying]=useState(false)
    const videoRef=useRef(null)
    const handleVideoPress=()=>{
        // if video is playing stop it
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }
        // otherwise if its not playing , play it
        else{
            videoRef.current.play()
            setPlaying(true)
        }

    }
    return (
        <div className='video'>
            <iframe className='video_player' width='100%' height='100%' src={url} title="Game of Thrones" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen onClick={handleVideoPress}></iframe>
            {/* <video className='video_player' controls width='100%' height='100%' loop ref={videoRef} onClick={handleVideoPress}>
                <source src="https://youtu.be/csirWnvNrwo" type="video/mp4" /> 
                <source src='../src/file.mp4' type="video/mp4" />
                Sorry, your browser doesn't support embedded videos. 
            </video> */}

            {/* Video Footer */}
            <VideoFooter channel={channel} description={description} song={song}/>
            {/* VideoSideBar */}
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>


        </div>
    )
}

export default Video