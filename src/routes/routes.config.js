import Home from "../pages/Home";
import Audience from "../pages/Audience";
import Videos from "../pages/Videos";
import CredentialFetching from '../pages/Host'
import Signin from '../pages/Signin.jsx'


const routes = [
    {
        name: 'Home',
        element: <Home/>,
        path: '/',
        index: true
    },

    {
        name: 'Audience',
        element: <Audience/>,
        path: '/audience',
    },

    {
        name: 'Videos',
        element: <Videos/>,
        path: '/videos',
    },

    {
        name: 'live',
        element: <CredentialFetching/>,
        path: '/live',
    },
    {
        name: 'signin',
        element: <Signin/>,
        path: '/signin',
    },
]



export default routes