import App from '../components/App.jsx';
import Vote from '../components/Vote.jsx';

const routes = {
    childRoutes: [{
        path: '/',
        component: App,
        indexRoute: {
            component: Vote
        }
    }]
};

export default routes;
