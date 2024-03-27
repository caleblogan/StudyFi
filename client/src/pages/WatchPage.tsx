import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const videos = [
    { id: "0", youtube_id: "WL5XBs_ha3g", title: "2-Hour Study with Me / Balcony Moon Rise / Pomodoro 50-10 / Relaxing Lo-Fi / Day 146" },
    { id: "1", youtube_id: "bIkcWIWb70Y", title: "" },
    { id: "2", youtube_id: "5Q2Pc-e-8Qc", title: "" },
    { id: "3", youtube_id: "VOaRhfJAoBE", title: "" },
]

export default function Watch() {
    const { id } = useParams<{ id: string }>();
    const [video] = useState(videos[id as unknown as number])
    console.log(id, video)
    return (
        <div className="bg-gray-900 min-h-screen text-white h-screen">
            <div className="h-[5%] flex items-center">
                <Link to={`/browse`} className="text-white">
                    <ArrowLeftIcon className="h-6 ml-2" />
                </Link>
            </div>
            <iframe width="100%" height="95%" src={`https://www.youtube.com/embed/${video.youtube_id}?autoplay=0`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div >
    )
}