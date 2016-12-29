import React from 'react';

const VideoDetail = ({video, onVideoSelect}) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    let videoId = video.id.videoId;
    let url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>

                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;