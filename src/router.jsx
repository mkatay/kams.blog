import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Notfound } from './pages/NotFound';
import { Footer } from './components/Footer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutComponent />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <Notfound />,
      },
    ],
  },
]);

function LayoutComponent() {
  return (
    <div>
      <header><Navbar/></header>
      <main>
        <Outlet /> 
      </main>
      <footer><Footer/></footer>
    </div>
  );
}
