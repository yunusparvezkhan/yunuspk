import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { changeActivePage } from '../store';

const Link = ({ to, children, ...rest }) => {
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

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        dispatch(changeActivePage(to));
    }

    const handleClick = (event) => {
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return (
        <a  {...rest} key={to} onClick={handleClick} >
            <button className='px-2 py-1'>{children}</button>
        </a>
    )
}

export default Link;