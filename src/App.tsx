import './scss/index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import StartPage from './pages/StartPage';
import ErrorPage from './pages/ErrorPage';
import CallsPage from './pages/CallsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <div>Start Page</div> },
      {
        path: 'calls/',
        element: <CallsPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
