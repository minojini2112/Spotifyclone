import React, { useContext } from "react";
import shuffle from "../../assests/icons/shuffle.png";
import previous from "../../assests/icons/previous.png";
import play from "../../assests/icons/play.png";
import pause from "../../assests/icons/pause.png";
import nexticon from "../../assests/icons/nexticon.png";
import loop from "../../assests/icons/loop.png";
import smartphone from "../../assests/icons/smartphone.png";
import mic from "../../assests/icons/microphone.png";
import queue from "../../assests/icons/queue.png";
import speaker from "../../assests/icons/speaker.png";
import volume from "../../assests/icons/volume.png";
import fullscreen from "../../assests/icons/full-screen.png";
import zoom from "../../assests/icons/zoom-out.png";
import { PlayerContext } from "../../Context/PlayerContext";

const Player = () => {
    const { seekbar, seekbg, Status, Play, Pause, Track, Time, Previous, Next, Seek } = useContext(PlayerContext);

    return (
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
            <div className="items-center hidden gap-4 lg:flex">
                <img className="w-12" src={Track.image} alt="songone" />
                <div>
                    <p>{Track.name}</p>
                    <p>{Track.desc}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img className="w-4 cursor-pointer" src={shuffle} alt="shuffle" />
                    <img onClick={Previous} className="w-4 cursor-pointer" src={previous} alt="previous" />
                    {Status ? (
                        <img onClick={Pause} className="w-4 cursor-pointer" src={pause} alt="pause" />
                    ) : (
                        <img onClick={Play} className="w-4 cursor-pointer" src={play} alt="play" />
                    )}
                    <img onClick={Next} className="w-4 cursor-pointer" src={nexticon} alt="nexticon" />
                    <img className="w-4 cursor-pointer" src={loop} alt="loop" />
                </div>
                <div className="flex items-center gap-5">
                    <p>
                        {Time.currentTime.minute}:{Time.currentTime.second}
                    </p>
                    <div
                        ref={seekbg}
                        className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
                        onClick={(e) => Seek(e)}
                    >
                        <hr ref={seekbar} className="w-0 h-1 bg-green-800 border-none rounded-full" />
                    </div>
                    <p>
                        {Time.totalTime.minute}:{Time.totalTime.second}
                    </p>
                </div>
            </div>
            <div className="items-center hidden gap-2 opacity-75 lg:flex">
                <img className="w-4" src={smartphone} alt="smartphone" />
                <img className="w-4" src={mic} alt="mic" />
                <img className="w-4" src={queue} alt="queue" />
                <img className="w-4" src={speaker} alt="speaker" />
                <img className="w-4" src={volume} alt="volume" />
                <div className="w-20 h-1 rounded bg-slate-50" />
                <img className="w-4" src={fullscreen} alt="fullscreen" />
                <img className="w-4" src={zoom} alt="zoom" />
            </div>
        </div>
    );
};

export default Player;
