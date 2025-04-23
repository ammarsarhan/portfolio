type PulseVariant = "Positive" | "Negative" | "Neutral" | "Mono";

export default function Pulse({ variant } : { variant : PulseVariant }) {
    switch (variant) {
        case "Positive":
            return <div className="w-2 h-2 rounded-full bg-green-600 pulse pulse-positive"></div>
        case "Negative":
            return <div className="w-2 h-2 rounded-full bg-red-700 pulse pulse-negative"></div>
        case "Neutral":
            return <div className="w-2 h-2 rounded-full bg-yellow-500 pulse pulse-neutral"></div>
        case "Mono":
            return <div className="w-2 h-2 rounded-full bg-black pulse pulse-mono"></div>
    }
};

export function PulseLabel({ variant, label } : { variant: PulseVariant, label: string }) {
    return (
        <div className="flex items-center gap-x-4">
            <Pulse variant={variant}/>
            <span className="text-sm underline">{label}</span>
        </div>
    )
}