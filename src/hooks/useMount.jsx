import { useEffect, useState } from "react";

export default function useMount(unMountCallback = () => {}, timeoutMS = 100)
{
    const [mounted, setMounted] = useState(true);

    useEffect(() => {

        let timeOut;

        if (!mounted)
        {
            timeOut = setTimeout(unMountCallback, timeoutMS);
        }

        return () => clearTimeout(timeOut);

    }, [mounted]);

    return [mounted, setMounted];
}