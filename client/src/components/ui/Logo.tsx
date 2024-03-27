import { cn } from "@/lib/utils"

export default function Logo({ className }: { className?: string }) {
    return <p className={cn("text-red-600 text-2xl", className)}>StudyFi</p>
}