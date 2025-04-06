const VideoTitle = (props: {title: string, overview: string}) => {
    
    return (
        <div className="px-12 text-white absolute w-full aspect-video bg-gradient-to-r from-black pt-40">
            <h1 className="text-4xl font-bold m-5">{props.title}</h1>
            <p className="w-1/3 mx-5 my-7 text-sm leading-6">{props.overview}</p>

            <div className="m-5 font-medium">
                <button className="bg-white text-black px-5 py-1 rounded-sm mr-2 focus:outline-2 outline-white outline-offset-2 hover:opacity-80">▶︎ Play</button>
                <button className="bg-neutral-600 px-5 py-1 rounded-sm focus:outline-2 outline-white outline-offset-2 hover:opacity-90">⌽ More info</button>
            </div>
        </div>
    );
}

export default VideoTitle;