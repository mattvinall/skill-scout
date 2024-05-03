import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Skills = () => {
    return (
        <section className="p-12">
            <h2 className="text-4xl font-display">Find Top Skills For Your Tech Stack in Your Area</h2>

            <form className="flex gap-3 md:w-1/2 my-12">
                <Input type="text" placeholder="Front End Developer" />
                <Input type="text" placeholder="Toronto" />
                <Button variant="outline">Submit</Button>
            </form>
        </section>
    )
}