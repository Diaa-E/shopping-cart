import { useEffect, useState } from "react";

export default function useMount(unMountCallback = () => {}, timeoutMS = 100)
{
    const [mounted, setMounted] = useState(true);

    useEffect(() => {

        if (!mounted)
        {
            const timeOut = setTimeout(unMountCallback, timeoutMS);
            return () => clearTimeout(timeOut);
        }
        
    }, [mounted]);

    return [mounted, setMounted];
}