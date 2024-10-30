import { Loader2 } from "lucide-react";

export default function FormLoading() {
    return <div className="flex justify-center items-center h-screen fixed top-0 left-0 w-full bg-black bg-opacity-50 z-50">
        <Loader2 className="animate-spin" />
    </div>
}
