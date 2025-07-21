import { Minimize2 } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { UploadWidgetTitle } from "./upload-widget-title";

export function UploadWidgetMinimizedHeader() {
    return (
        <Collapsible.Trigger className="group w-full p-4 py-2 bg-white/2 border-zinc-800 border-b flex items-center justify-between gap-5">
            <UploadWidgetTitle />
            <Minimize2 strokeWidth={1.5} className="size-4 text-zinc-400 group-hover:text-zinc-100"/>
        </Collapsible.Trigger>
    )
}