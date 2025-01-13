import Typewriter from "./fancy/typewriter";

export default function TypewritterText() {
    return(
        <div className="ext-4xl md:text-5xl font-bold mb-4">
            <p className="whitespace-pre-wrap">
                <span>{"Encuentra el mejor spot para "}</span>
                <Typewriter
                    text={[
                        "volar",
                        "navegar",
                        "kitear",
                        "nadar",
                    ]}
                    speed={70}
                    className="text-blue-400"
                    waitTime={1500}
                    deleteSpeed={40}
                />
            </p>
        </div>
    )
}