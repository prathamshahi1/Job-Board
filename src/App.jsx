import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
{
path: '/',
element: <h1>home</h1>,
},
{
path: '/about',
element: (
<div>
<h2>about page</h2>
</div>
),
},
]);



const App = () => {
return <h1>Jobify App</h1>;
};
export default App;