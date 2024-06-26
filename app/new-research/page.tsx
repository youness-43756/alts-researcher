import ResearchForm from "@/components/new-research/researchForm";
import TooltipPage from "@/components/tooltipComponent/tooltipPage";
import { InfoIcon } from "lucide-react";

export default function page() {
    // console.log();
    return (
        <main className="w-full">
            <div className="flex items-start py-1 justify-center gap-x-[1px] mb-10 text-3xl font-medium tracking-wider leading-5">
                <span color="#373A40">Your research</span>
                <TooltipPage
                    trigger={<InfoIcon size={15} color="gray" cursor={"pointer"} />}
                    content={<div>
                        <span>--</span>
                    </div>} />
            </div>
            <ResearchForm />

        </main>
    )
}
