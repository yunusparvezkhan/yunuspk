import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeActivePage } from '../store';

const useLink = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handler = () => {
            dispatch(changeActivePage(window.location.pathname))
        }

        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        }

    }, [dispatch])

    const navigate = (path) => {
        window.history.pushState({}, '', path);
        dispatch(changeActivePage(path));
    }

    return navigate;
}

export { useLink };