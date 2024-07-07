import FilterContainer from "@/components/filterContainer/filter";
import Wrapper from "@/components/wrapper";

export default function page() {
    return (
        <main className="h-full w-full overflow-hidden">
            <FilterContainer staticClassName="flex items-center md:gap-6 gap-4 pb-2 md:pb-2 px-0 border-b px-1" />
            <Wrapper />
        </main>
    )
}