import { useSelector } from 'react-redux'

const Route = ({ path, children }) => {
    const { activePage } = useSelector((state) => {
        return state.navigation;
    })

    if (activePage === path) {
        return children
    } else {
        return;
    }
}

export default Route