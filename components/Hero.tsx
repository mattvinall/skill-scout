export const Hero = () => {
    return (
        <section className={`flex flex-col items-center justify-center border-b-8 h-[50vh] dark:border-white border-black px-12`}>
            <h1 className="text-5xl md:text-8xl dark:text-white mb-12 font-display text-center">Welcome to SkillScout</h1>
            <p className=" text-2xl md:text-3xl dark:text-white text-center px-6">Helping developers find in-demand skills in <span className="dark:border-white border-black border-b-4">minutes</span>, not hours.</p>
        </section>
    )
}