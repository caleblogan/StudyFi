import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ChooseProfilePage() {
    const navigate = useNavigate()
    function handleProfileClick(name: string) {
        navigate(`/browse?profile=${name}`)
    }
    return <div className="bg-gray-900">
        <div className="w-5/6 flex text-white flex-col gap-4 items-center h-screen justify-center m-auto">
            <h1 className="text-3xl">Who's watching?</h1>
            <div className="flex w-full justify-center gap-4 flex-wrap">
                <Profile name="User 1" color="red" onClick={handleProfileClick} />
                <Profile name="User 2" color="blue" onClick={handleProfileClick} />
                <Profile name="User 3" color="emerald" onClick={handleProfileClick} />
                <Profile name="User 4" color="yellow" onClick={handleProfileClick} />
            </div>
            <Button className="mt-10 border border-gray-500 text-gray-500 rounded-none  hover:text-white hover:border-white">Manage Profiles</Button>
        </div>
    </div>
}

type ProfileProps = {
    name: string,
    color: "red" | "blue" | "emerald" | "yellow",
    onClick: (name: string) => void
}
function Profile({ name, color, onClick }: ProfileProps) {
    const shade = `${color}-500`;
    return <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-white">
        <Button
            onClick={() => onClick(name)}
            className={`w-[10vw] h-[10vw] min-w-[84px] max-w-[200px] min-h-[84px] max-h-[200px] bg-${shade} border-2 border-${shade} hover:border-white hover:bg-${shade}`}></Button>
        <p className="text-sm">{name}</p>
    </div >
}