import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeActivePage } from '../store';

const Link = ({ to, secondaryPath, children, ...rest }) => {
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

    const handleClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        secondaryPath ? navigate(secondaryPath) : navigate(to);
        window.scrollTo({ top: 0, left: 0 })
    }

    return (
        <a  {...rest} key={to} onClick={handleClick} >
            {children}
        </a>
    )
}

export default Link;