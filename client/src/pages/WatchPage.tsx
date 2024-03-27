import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const videos = [
    { id: "0", youtube_id: "k_3DFCzcMC4" },
    { id: "1", youtube_id: "5Q2Pc-e-8Qc" },
    { id: "2", youtube_id: "2QqY0wqC5dA" },
    { id: "3", youtube_id: "gY0eouUa6H8" },
]

export default function Watch() {
    const { id } = useParams<{ id: string }>();
    const [video] = useState(videos[id as unknown as number])
    return (
        <div className="bg-gray-900 min-h-screen text-white h-screen">
            <div className="h-[5%] flex items-center">
                <Link to={`/browse`} className="text-white">
                    <ArrowLeftIcon className="h-6 ml-2" />
                </Link>
            </div>
            <iframe width="100%" height="95%" src={`https://www.youtube.com/embed/${video.youtube_id}?autoplay=1`} title="3.5-HOUR STUDY WITH ME /  quiet jazz / 🌁 Tokyo Tower at sunrise / with countdown+alarm" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div >
    )
}