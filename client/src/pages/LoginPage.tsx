import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    function handleLogin() {
        console.log("Login");
        navigate("/choose-profile");
    }
    return <div className="bg-black  absolute w-full h-full -z-20">
        <header className="mt-6 ml-8">
            <Logo />
        </header>
        <div className="block absolute top-0 left-0 -z-10  bg-cover h-full w-full min-h-screen min-w-screen overflow-hidden opacity-35">
            <img
                className="min-w-full min-h-full object-cover"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/1c01ae52-0a90-41c5-a3ab-2736447a92ed/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
        </div>
        <main className="mt-6 text-white w-[450px] h-[707px] m-auto bg-opacity-50 rounded bg-gray-900 flex flex-col gap-6 justify-center items-center">
            <h1 className="text-3xl">Sign In</h1>
            <Button variant="destructive" onClick={handleLogin}>Login with Github</Button>
            <p>or</p>
            <Button variant="ghost" onClick={handleLogin}>Login with Anon</Button>
        </main>
    </div>
}