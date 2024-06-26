import HeaderInput from "./headerInput";
import MenuPage from "./dropdownMenu/menu";

export default function HeaderContainer() {
    return (
        <header className="z-50 bg-[#538392] h-14 px-6 rounded-2xl my-3 flex flex-row justify-between items-center drop-shadow-xl shadow-[#6295A2]">
            <MenuPage />
            <HeaderInput />
        </header>
    )
}
