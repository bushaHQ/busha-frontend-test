const Route = (path: any, children: any) => {
    return window.location.pathname === path ? children : null
}

export default Route;