import Logo from "@/components/ui/Logo"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { Bell, ChevronDown, Info, Play, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function BrowsePage() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <PinningHeader />
            <Billboard />
            <div className="relative ml-8">
                <TitleCardRow title="Popular on Netflix" />
                <TitleCardRow title="Continue Watching" />
                <TitleCardRow title="Trending Now" />
                <TitleCardRow title="Sci-Fi Movies" />
            </div>
        </div>
    )
}

function PinningHeader() {
    return <header className="z-10 flex top-0 left-0 fixed w-screen items-center p-2 pl-8 pr-8 gap-4 bg-gradient-to-b from-slate-900">
        <Logo className="w-20 h-6" />
        <Button variant="link" className="text-white ml-4 p-0 h-auto flex text-xs items-center">Browse <ChevronDown size="16" /> </Button>
        <div className="flex ml-auto gap-6 items-center">
            <Search />
            <Bell />
            <Avatar />
        </div>
    </header>
}

function Avatar() {
    return <div className="w-8 h-8 bg-gray-700 rounded"></div>
}

function Billboard() {
    const navigate = useNavigate()
    return <div className="w-full h-[50vw] min-h-[420px] relative">
        <img
            className="absolute w-screen top-0 left-0 opacity-60 min-h-[380px] object-cover"
            src="https://occ-0-6210-1009.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSjS2LZRjnRSe1Lmvo7Qz-m5ADDuJUtJI34GFrXQj-mmNPs_ma2su8E_t1Hi17TjKXK1nd7GMUgDDlx1OF6lQXew_HrJRzy1l91h.webp?r=c0e" />
        <div className="bg-gradient-to-t from-gray-900 h-[200px] w-full bottom-[-6vw] left-0 absolute">
        </div>
        <div className="flex flex-col justify-center h-full ml-8 relative pt-20">
            <h2 className="text-5xl">THE PROGRAM</h2>
            <h3 className="text-lg text-gray-300 ml-6">Cons, Cults, and Kidnapping</h3>
            <div className="mt-4 flex gap-3">
                <svg viewBox="0 0 28 30" className="w-5"><rect x="0" width="28" height="30" rx="3" fill="#e50914"></rect><path d="M16.8211527,22.1690594 C17.4133103,22.1690594 17.8777709,21.8857503 18.2145345,21.3197261 C18.5512982,20.7531079 18.719977,19.9572291 18.719977,18.9309018 C18.719977,17.9045745 18.5512982,17.1081018 18.2145345,16.5414836 C17.8777709,15.9754594 17.4133103,15.6921503 16.8211527,15.6921503 C16.2289952,15.6921503 15.7645345,15.9754594 15.427177,16.5414836 C15.0904133,17.1081018 14.9223285,17.9045745 14.9223285,18.9309018 C14.9223285,19.9572291 15.0904133,20.7531079 15.427177,21.3197261 C15.7645345,21.8857503 16.2289952,22.1690594 16.8211527,22.1690594 M16.8211527,24.0708533 C15.9872618,24.0708533 15.2579042,23.8605988 14.6324861,23.4406836 C14.0076618,23.0207685 13.5247891,22.4262352 13.1856497,21.6564897 C12.8465103,20.8867442 12.6766436,19.9786109 12.6766436,18.9309018 C12.6766436,17.8921018 12.8465103,16.9857503 13.1856497,16.2118473 C13.5247891,15.4379442 14.0076618,14.8410352 14.6324861,14.4205261 C15.2579042,14.0006109 15.9872618,13.7903564 16.8211527,13.7903564 C17.6544497,13.7903564 18.3844012,14.0006109 19.0098194,14.4205261 C19.6352376,14.8410352 20.1169224,15.4379442 20.4566558,16.2118473 C20.7952012,16.9857503 20.9656618,17.8921018 20.9656618,18.9309018 C20.9656618,19.9786109 20.7952012,20.8867442 20.4566558,21.6564897 C20.1169224,22.4262352 19.6352376,23.0207685 19.0098194,23.4406836 C18.3844012,23.8605988 17.6544497,24.0708533 16.8211527,24.0708533" fill="#FFFFFF"></path><polygon fill="#FFFFFF" points="8.86676 23.9094206 8.86676 16.6651418 6.88122061 17.1783055 6.88122061 14.9266812 11.0750267 13.8558085 11.0750267 23.9094206"></polygon><path d="M20.0388194,9.42258545 L20.8085648,9.42258545 C21.1886861,9.42258545 21.4642739,9.34834303 21.6353285,9.19926424 C21.806383,9.05077939 21.8919103,8.83993091 21.8919103,8.56731273 C21.8919103,8.30122788 21.806383,8.09572485 21.6353285,7.94961576 C21.4642739,7.80410061 21.1886861,7.73104606 20.8085648,7.73104606 L20.0388194,7.73104606 L20.0388194,9.42258545 Z M18.2332436,12.8341733 L18.2332436,6.22006424 L21.0936558,6.22006424 C21.6323588,6.22006424 22.0974133,6.31806424 22.4906012,6.51465818 C22.8831952,6.71125212 23.1872921,6.98684 23.4028921,7.34142182 C23.6178982,7.69659758 23.7259952,8.10522788 23.7259952,8.56731273 C23.7259952,9.04246424 23.6178982,9.45762788 23.4028921,9.8122097 C23.1872921,10.1667915 22.8831952,10.4429733 22.4906012,10.6389733 C22.0974133,10.8355673 21.6323588,10.9335673 21.0936558,10.9335673 L20.0388194,10.9335673 L20.0388194,12.8341733 L18.2332436,12.8341733 Z" fill="#FFFFFF"></path><path d="M14.0706788,11.3992752 C14.3937818,11.3992752 14.6770909,11.322063 14.9212,11.1664509 C15.1653091,11.0114327 15.3553697,10.792863 15.4913818,10.5107418 C15.6279879,10.2286206 15.695697,9.90136 15.695697,9.52717818 C15.695697,9.1535903 15.6279879,8.82573576 15.4913818,8.54361455 C15.3553697,8.26149333 15.1653091,8.04351758 14.9212,7.88790545 C14.6770909,7.73288727 14.3937818,7.65508121 14.0706788,7.65508121 C13.7475758,7.65508121 13.4642667,7.73288727 13.2201576,7.88790545 C12.9760485,8.04351758 12.7859879,8.26149333 12.6499758,8.54361455 C12.5139636,8.82573576 12.4456606,9.1535903 12.4456606,9.52717818 C12.4456606,9.90136 12.5139636,10.2286206 12.6499758,10.5107418 C12.7859879,10.792863 12.9760485,11.0114327 13.2201576,11.1664509 C13.4642667,11.322063 13.7475758,11.3992752 14.0706788,11.3992752 M14.0706788,12.9957842 C13.5634545,12.9957842 13.0995879,12.9090691 12.6784848,12.7344509 C12.2573818,12.5604267 11.8915152,12.3163176 11.5808848,12.0027176 C11.2708485,11.6891176 11.0314909,11.322063 10.8634061,10.9003661 C10.6953212,10.479263 10.6115758,10.0213358 10.6115758,9.52717818 C10.6115758,9.03302061 10.6953212,8.57568727 10.8634061,8.1539903 C11.0314909,7.73288727 11.2708485,7.36523879 11.5808848,7.05163879 C11.8915152,6.73803879 12.2573818,6.49452364 12.6784848,6.31990545 C13.0995879,6.14588121 13.5634545,6.05857212 14.0706788,6.05857212 C14.577903,6.05857212 15.0417697,6.14588121 15.4628727,6.31990545 C15.8839758,6.49452364 16.2498424,6.73803879 16.5604727,7.05163879 C16.871103,7.36523879 17.1098667,7.73288727 17.2779515,8.1539903 C17.4460364,8.57568727 17.5297818,9.03302061 17.5297818,9.52717818 C17.5297818,10.0213358 17.4460364,10.479263 17.2779515,10.9003661 C17.1098667,11.322063 16.871103,11.6891176 16.5604727,12.0027176 C16.2498424,12.3163176 15.8839758,12.5604267 15.4628727,12.7344509 C15.0417697,12.9090691 14.577903,12.9957842 14.0706788,12.9957842" fill="#FFFFFF"></path><polygon fill="#FFFFFF" points="8.4639503 12.8342327 6.65837455 13.2666206 6.65837455 7.77862061 4.65323515 7.77862061 4.65323515 6.22012364 10.4690897 6.22012364 10.4690897 7.77862061 8.4639503 7.77862061"></polygon></svg>
                <p className="text-sm">#8 in TV Shows Today</p>
            </div>
            <p className="max-w-[398px] mt-6 text-sm">
                Years after being sent to a disciplinary school, a woman still haunted by her experiences exposes the corruption and abuse of the troubled teen industry.
            </p>
            <div className="mt-4">
                <Button
                    onClick={() => navigate("/watch/5")}
                    variant="secondary" className="h-8"><Play fill="black" size={16} className="mr-2" />Play</Button>
                <Button variant="ghost" className="h-8 ml-2"><Info size={16} className="mr-2" /> More Info</Button>
            </div>

        </div>

    </div>
}

function TitleCardRow({ title }: { title: string }) {
    return <div className="pb-10 relative h-full">
        <h2 className="mb-2">{title}</h2>
        <Carousel >
            <CarouselContent>
                <CarouselItem className="max-sm:basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
                    <Card className="" id="1" src="https://occ-0-6210-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABepFbvo69uVQ69MkH7QkO2UJDKE7yYVWE0MRTfJBcZL_Tfa_-kE91GSmYedAreEAQ5vzPjVLCghEjqxGZKu8vILZWa2T7Fx2tJSpcsb2Cjws_wAsPfsrMjDfJhfx-el2xTUthO7ocLPXyeOH3e_LPLGApNbymQepvb1E-gH2M-IfnqL6Qvc3JvNecdNKyZUVILYMph5c7Iu0wIWTezH_nT2bT0-rbHPjDaKf2sEp9WIilpqT5jgTCYLEFHvs67VCiHywWpaVBF7i5z97G519z7omsLjQXJGO7LHKQWo_-hlUEdUW_L9yndAaNPfYGoylJmjVXCRUQ13zXlfcznol32Q.webp?r=822" />
                </CarouselItem>
                <CarouselItem className="max-sm:basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
                    <Card id="2" src="https://occ-0-6210-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQIt9JfVOvnhmq0az7inGvCyIx7Kz3cHFkxmn1pE5hv5WVCMmfs6q1e6WRoCPY28qFpRATDxwgy0-CJtOt30zJwFlVfW4S1JVtRQHFCBeNIfI4l5JN4nqjSbO2xmdCSb21-ujSs8b7qT096T_qohJAZIJo-viJ38PyaNzoqQ3bjy6WxzHoS1HF4K2ZPxq_hqkyYmnDBBG2bSUSvSOTit6W9FWYHfpE_fsnH_0VnU19EPvN229so95M4BxU2x9PLBJSgtgXMRSn-wAbz9_H7fxRoSMbkcRdChjVtZUtMXKlN1yQwQttmhxVQZOM48BdLAeEVenO1iJtYArwWa_I2CduGuPxPZ1ReA5OBWNgadkNs-q46zxf8.jpg?r=aec" />
                </CarouselItem>
                <CarouselItem className="max-sm:basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
                    <Card id="3" src="https://occ-0-6210-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT8E9r7AzpPIo6WpRfJGSi3vsx5seCjef_AFJXUsnFgextXyUQgD2MG3LwSGwHd2PjCmj6VyMQwl314B1y_u-K35TT0a-s6yoc0jbaAEpkvVNwo4RV3PioyUW64WyRc8Lyv6fqn-avmpc0YV9Vn5shGo_Cr-aWYxTRSyEJVwFlDJPGF_dUwsy71dUno7Uts5MHKFr76l3UVZr2vc7e3LLpYMYp5lQbyUnjpm3bSsAprwIx-nbLRQRElo9CzVljWKvnixB-LvqoUciP074uXHuGt_rxmAAPEmdeQ-BHaHtSWq0n2gJhWhLk_IpGHu0a4Uv4-4-KtR_saXCqkjaHNuFyfOHhajJ45ORcaEMF5rJrNhIWh53m4.jpg?r=3d5" />
                </CarouselItem>
                <CarouselItem className="max-sm:basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
                    <Card id="4" src="https://occ-0-6210-1009.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfo9wLc6aJowGhSAKdMSJORgttzZ43Hj7GFzw2Uzg1Au1DDsogCIY6KiyNtafrrzZbi-uEiyEi3cunPMK0GFGL-aJDLk3Eymjp4UvtAFRzWC_TueUGtYDspeLouIdSikJRLB41_Ts0dCTiIl90rg5Bv6dbAQ9q-geW9iC2VM48qDKNxfJelUhlIh8dQDGFrbv5_ou-GYcZMYw7k_Vxh4BA3zwJbhOZh-dT9O7YRaCJwoWIV6rGQGm4F115_2nyDtn3wArBvohV8SeJaDv8-6Tj1xgad_.webp?r=a8a" />
                </CarouselItem>
            </CarouselContent>
            <div className="hover:bg-gray-900 opacity-55 absolute flex h-full w-[40px] top-0 right-[0px] items-center max-sm:" >
                <CarouselNext className="absolute  top-[50%] left-1 hover:opacity-100" />
            </div>
            <div className="hover:bg-gray-900 opacity-55 absolute flex h-full w-[40px] top-0 left-[0px] items-center" >
                <CarouselPrevious className="absolute  top-[50%] left-1 hover:opacity-100" />
            </div>
        </Carousel>
    </div>
}

function Card({ src, id, className }: { src: string, id: string, className?: string }) {
    const navigate = useNavigate()
    function handleClick() {
        navigate(`/watch/${id}`)
    }
    return <div
        className="cursor-pointer"
        onClick={handleClick}
    >
        <img
            className={cn("rounded-sm border border-opacity-0 border-gray-600 hover:border-opacity-100 ", className)}
            src={src} />
    </div>
}

