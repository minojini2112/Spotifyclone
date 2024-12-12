import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assests/assests";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekbar = useRef();
    const seekbg = useRef();
    const [Track, setTrack] = useState(songsData[2]);
    const [Status, setStatus] = useState(false);
    const [Time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 0, minute: 0 }
    });

    const Play = () => {
        audioRef.current.play();
        setStatus(true);
    };

    const Pause = () => {
        audioRef.current.pause();
        setStatus(false);
    };

    const Playid = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setStatus(true);
    };

    const Previous = async () => {
        if (Track.id > 0) {
            await setTrack(songsData[Track.id - 1]);
            await audioRef.current.play();
            setStatus(true);
        }
    };

    const Next = async () => {
        if (Track.id < songsData.length - 1) {
            await setTrack(songsData[Track.id + 1]);
            await audioRef.current.play();
            setStatus(true);
        }
    };

    const Seek = (e) => {
        const rect = seekbg.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const duration = audioRef.current.duration;
        const newTime = (offsetX / rect.width) * duration;
        audioRef.current.currentTime = newTime;
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.ontimeupdate = () => {
                const currentTime = audio.currentTime;
                const duration = audio.duration;
                seekbar.current.style.width = `${(currentTime / duration) * 100}%`;
                setTime({
                    currentTime: {
                        second: Math.floor(currentTime % 60),
                        minute: Math.floor(currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(duration % 60),
                        minute: Math.floor(duration / 60)
                    }
                });
            };
        }
        return () => {
            if (audio) {
                audio.ontimeupdate = null;
            }
        };
    }, [audioRef]);

    const contextValue = {
        audioRef,
        seekbar,
        seekbg,
        Track,
        setTrack,
        Status,
        setStatus,
        Time,
        setTime,
        Play,
        Pause,
        Playid,
        Previous,
        Next,
        Seek
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export { PlayerContext, PlayerContextProvider };
