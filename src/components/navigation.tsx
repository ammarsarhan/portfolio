/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import { PulseLabel } from "@/components/pulse";

export default function Navigation() {
    return (
        <nav className="flex items-center justify-between p-4">
            <Link href={"/"} className="font-semibold">sarhan.studio</Link>
            <PulseLabel variant="Mono" label="Open to collaboration!"/>
            <div className="flex items-center gap-x-2 text-sm text-gray-700">
                <Link href={"/mission"} className="hover:underline">Mission</Link>
                <span>//</span>
                <Link href={"/process"} className="hover:underline">Process</Link>
                <span>//</span>
                <Link href={"/cases"} className="hover:underline">Case Studies</Link>
            </div>
            <Link href={"/contact"} className="text-sm hover:underline">Discuss a project!</Link>
        </nav>
    )
}