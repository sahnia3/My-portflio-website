import React from 'react'

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  )
}

export default BackgroundVideo
