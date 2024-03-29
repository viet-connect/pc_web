import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { MAX_SHOW_PAGES } from '../constant/page';

export default function usePagination(totalPages) {
    const router = useRouter();
    const { pathname, query } = router;

    const [currentPage, setCurrentPage] = useState(1);

    const onMovePage = useCallback((position: number | string) => {
        let targetPage = currentPage;
        if (['next', 'prev'].includes(position as string)) {
            const move = position === 'next' ? 1 : -1;
            targetPage += move;
        } else {
            targetPage = position as number;
        }

        if (targetPage <= 0 || targetPage > totalPages) {
            return;
        }

        setCurrentPage(targetPage);
        router.push({ pathname, query: { ...query, postingPage: targetPage } });
    }, [currentPage, pathname, query]);

    const showPages = useMemo(() => {
        const maxShowPage = Math.min(MAX_SHOW_PAGES, totalPages);
        const mock = Math.floor(currentPage / (maxShowPage + 1)) + 1;
        const unit = MAX_SHOW_PAGES * mock;
        return Array(maxShowPage).fill(null).map((_, i) => {
            const page = unit - MAX_SHOW_PAGES + i + 1;
            const isShowPagesVariable = currentPage > unit;
            return isShowPagesVariable ? page + MAX_SHOW_PAGES : page;
        });
    }, [currentPage, totalPages]);

    useEffect(() => {
        const { postingPage, lastId: _lastId } = query;
        const isSamePage = postingPage && parseInt(postingPage as string, 10) === currentPage;
        if (isSamePage) return;

        const page = postingPage ? parseInt(postingPage as string, 10) : 1;
        setCurrentPage(page);
        router.replace({ pathname, query: { ...query, postingPage: page } });
    }, [query]);

    return { currentPage, showPages, onMovePage };
}
