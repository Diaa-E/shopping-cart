import { useEffect, useState } from "react";

export default function useMount(unMountCallback, timeoutMS)
{
    const [mounted, setMounted] = useState(true);

    useEffect(() => {

        if (!mounted)
        {
            setTimeout(unMountCallback, timeoutMS);
        }

    }, [mounted]);

    return [mounted, setMounted];
}