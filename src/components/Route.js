import { useSelector } from 'react-redux'

const Route = ({ path, secondaryPath, children }) => {
    const { activePage } = useSelector((state) => {
        return state.navigation;
    })

    if (activePage === path || activePage === secondaryPath) {
        return children
    } else {
        return;
    }
}

export default Route