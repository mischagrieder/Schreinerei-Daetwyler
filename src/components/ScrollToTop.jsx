import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { getLenis } from '@/lib/smoothScroll';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        const lenis = getLenis();
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }, [pathname]);

    return null;
}

export default ScrollToTop;