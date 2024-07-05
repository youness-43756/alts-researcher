import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

type Props = {
    trigger: React.ReactNode,
    content: React.ReactNode
}

export default function TooltipPage({ trigger, content }: Props) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {trigger}
                </TooltipTrigger>

                <TooltipContent>
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        // <DropdownMenu>
        //     <DropdownMenuTrigger asChild>
        //         {trigger}
        //     </DropdownMenuTrigger>
        //     <DropdownMenuContent>
        //         {content}
        //     </DropdownMenuContent>
        // </DropdownMenu>
    )
}
