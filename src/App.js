import { Toaster } from 'react-hot-toast';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from "./components/main/Main";
import Myself from './components/myself/Myself';
import About from './pages/about/About';
import ContactMe from './pages/contact-me/ContactMe';
import Home from "./pages/home/Home";
import Works from './pages/my-work/Works';
import Skills from './pages/skills/Skills';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'about',
          element: <Myself home={false}/>
        },
        {
          path: 'skills',
          element: <Skills home={false} />
        },
        {
          path: 'works',
          element: <Works />
        },
        {
          path: 'contact',
          element: <ContactMe home={false} />
        },
      ]
    }
  ])

  return (
    <div className="min-h-screen bg-[#1D1D1D]">
     <RouterProvider router={router}/>
     <Toaster />
    </div>
  );
}

export default App;
