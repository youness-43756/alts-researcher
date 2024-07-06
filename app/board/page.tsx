import FilterContainer from "@/components/filterContainer/filter";
import Wrapper from "@/components/wrapper";

export default function page() {
    return (
        <main className="h-full overflow-hidden">
            <FilterContainer staticClassName="flex items-center gap-6 py-3 md:py-2 px-0 border-b px-1" />
            <Wrapper />
        </main>
    )
}