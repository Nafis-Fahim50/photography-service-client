import React from 'react';
import video from '../../../videos/video.mp4'

const VideoGraphy = () => {
    return (
        <div className='mt-10 bg-base-200 rounded-lg m-5 p-5 lg:w-1/2 lg:p-10 mx-auto'>
            <p className='text-orange-500'>Videography</p>
            <h3 className='lg:text-3xl text-2xl font-bold'>See My Videography</h3>
            <div className='mt-7'>
                <video className='mx-auto rounded-lg lg:w-1/2' src={video} controls/>
            </div>
        </div>
    );
};

export default VideoGraphy;