import FilterContainer from "@/components/filterContainer/filter";
import Wrapper from "@/components/wrapper";

export default function page() {
    return (
        <main className="h-full overflow-hidden">
            <FilterContainer />
            <Wrapper />
        </main>
    )
}