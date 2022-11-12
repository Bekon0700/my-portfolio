import { Toaster } from 'react-hot-toast';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Main from "./components/main/Main";
import Myself from './components/myself/Myself';
import About from './pages/about/About';
import ContactMe from './pages/contact-me/ContactMe';
import Home from "./pages/home/Home";
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
          element: <About />
        },
        {
          path: 'skills',
          element: <Skills />
        },
        {
          path: 'contact',
          element: <ContactMe />
        },
      ]
    }
  ])

  return (
    <div className="min-h-screen bg-black">
     <RouterProvider router={router}/>
     <Toaster />
    </div>
  );
}

export default App;
