import { ModeToggle } from "@/components/theme-toggle";

export const Header = () => {
    return (
        <header className="p-12 border-b-8 dark:border-white border-black">
            <nav>
                <ul className="flex justify-between items-center">
                    <li>
                        <p className="text-4xl md:text-6xl dark:text-white font-display font-bold font-700">SkillScout</p>
                    </li>
                    <li>
                        <ModeToggle />
                    </li>
                </ul>
            </nav>
        </header>
    )
}