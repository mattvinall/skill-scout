import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Skills = () => {
    return (
        <section className="p-12">
            <h2 className="text-4xl font-display text-center md:text-left">Find Top Skills For Your Tech Stack in Your Area</h2>

            <form className="flex flex-col md:flex-row gap-3 md:w-1/2 my-12">
                <Input type="text" placeholder="Front End Developer" />
                <Input type="text" placeholder="Toronto" />
                <Button variant="outline">Submit</Button>
            </form>

            <h2 className="text-2xl font-display text-center md:text-left">Top 5 Related Skills for Front End Developer:</h2>
            <ul className="flex flex-col ml-8 gap-y-2 mt-4 font-bold">
                <li className="list-disc">HTML - 70%</li>
                <li className="list-disc">CSS - 65%</li>
                <li className="list-disc">JavaScript - 72%</li>
                <li className="list-disc">React - 53%</li>
                <li className="list-disc">Next.js - 36%</li>
            </ul>
        </section>
    )
}