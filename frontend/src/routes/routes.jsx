import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Layout from '../pages/Layout';
import ErrorPage from '../pages/ErrorPage';


const routeDefinition = createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='*' element={<ErrorPage />}></Route>
    </Route>
);
const router = createBrowserRouter(routeDefinition);


export { router };