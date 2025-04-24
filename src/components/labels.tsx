export function SectionLabel ({ index, label } : { index : number, label : string }) {
    return (
        <div className="flex items-center gap-x-2">
            <div className="flex-center text-xs bg-gray-300 text-black w-5 h-5 rounded-full">{index}</div>
            <span className="text-sm">{label}</span>
        </div>
    )
}