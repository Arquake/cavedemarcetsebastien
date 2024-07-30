import './App.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import Accueil from "./pages/accueil.tsx";
import Logo from "./components/logo.tsx";
import Footer from "./components/footer.tsx";
import Selection from "./pages/selection.tsx";
import Mets from "./pages/mets.tsx";
import Agenda from "./pages/agenda.tsx";
import Contact from "./pages/contact.tsx";
import Mo from "./pages/mo.tsx";

const router = createBrowserRouter(
[
    {
        path: '/',
        element:
            <>
                <header>
                    <Navbar/>
                    <Logo/>
                </header>
                <Outlet/>
                <Footer/>

            </>,
        children:
        [
            {
              path: "",
              element:  <Accueil/>
            },
            {
                path: '/selection',
                element: <Selection />
            }
            ,
            {
                path: '/mets-et-vins',
                element: <Mets />
            },
            {
                path: '/agenda-degustations',
                element: <Agenda />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/mentions-obligatoires',
                element: <Mo />
            }
        ]
    },

    ]
);
function App() {
  return (
      <>
          <RouterProvider router={router}/>
          <Outlet />
      </>
  )
}

export default App
