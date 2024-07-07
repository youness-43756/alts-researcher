import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { PaintRoller } from "lucide-react";

type Props = {
    trigger: React.ReactNode,
    content: React.ReactNode
}

export default function TooltipPage({ trigger, content }: Props) {
    return (
        <>
            <div className="md:inline-flex hidden">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            {trigger}
                        </TooltipTrigger>
                        <TooltipContent>
                            <div className="flex gap-1 p-1">
                                {content}
                            </div>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

            <div className="md:hidden inline-flex">
                <Select>
                    <SelectTrigger className="w-fit focus:ring-0 focus:ring-offset-0 border-none">
                        <SelectValue placeholder={<PaintRoller className={"h-4 w-4 px-0 mr-1"} />} />
                    </SelectTrigger>
                    <SelectContent>
                        <div className="flex gap-1 p-1">
                            {content}
                        </div>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}
