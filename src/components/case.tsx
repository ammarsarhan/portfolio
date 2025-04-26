export default function CaseItem ({ title, label, description } : { title: string, label: string, description: string }) {
    return (
        <div className="w-full flex flex-col gap-y-10">
            <div className="plasma h-[35vw]"></div>
            <div className="flex-center flex-col gap-y-3 text-center">
                <h3 className="text-3xl font-semibold w-3/4"><span className="underline">{title}</span> — {label}</h3>
                <h5 className="text-gray-600 text-lg font-medium w-3/4">{description}</h5>
            </div>
        </div>
    )
}