import { ReactNode } from "react"

export function ListItem({ title, description, items, index } : { title: string, description: string, items: string[], index: number }) {
    return (
        <div className="w-full">
            <div className="w-full px-2 pt-2 pb-4 border-b-[1px]">
                <span className="text-2xl font-medium">0{index}</span>
            </div>
            <div className="flex justify-between pt-8 pb-4">
                <div>
                    <h2 className="text-4xl font-medium mb-6">{title}</h2>
                    <p className="w-96">{description}</p>
                </div>
                <div>
                    <ul className="text-right w-96">
                        {
                            items.map((item, index) => (
                                <li key={index} className="text-2xl">{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default function List({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col gap-y-4">
            {children}
        </div>
    )
}