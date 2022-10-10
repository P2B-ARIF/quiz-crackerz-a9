import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';
import Main from './Layout/Main';
import Quiz from './Components/Quiz/Quiz';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />,
        },
        {
          path: '/quiz/:quiz',
          loader: async ({ params }) => {
           return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quiz}`)
          },
          element: <Quiz />,
        },
        {
          path: '/statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics />,
        },
        {
          path: '/blogs',
          element: <Blogs />,
        }

      ]
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
