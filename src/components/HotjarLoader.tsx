import { useEffect } from 'react';

const loadHotjar = (): void => {
    (window as any).hj =
        (window as any).hj ||
        function () {
            ((window as any).hj.q = (window as any).hj.q || []).push(arguments);
        };
    (window as any)._hjSettings = { hjid: 3224784, hjsv: 6 };

    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://static.hotjar.com/c/hotjar-${(window as any)._hjSettings.hjid}.js?sv=${(window as any)._hjSettings.hjsv
        }`;
    head.appendChild(script);
};

const HotjarLoader = (): null => {
    useEffect(() => {
        loadHotjar();
    }, []);

    return null;
};

export default HotjarLoader;
