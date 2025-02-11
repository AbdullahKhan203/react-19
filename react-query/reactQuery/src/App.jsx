import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import MainLayout from './components/Layout/MainLayout';
import { Home } from './Pages/Home';
import { FetchOld } from './Pages/FetchOld';
import { FetchRQ } from './Pages/FetchRQ';
import "./App.css";
const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
       path:'/',
       element:<Home/>,
      },
      {
       path:'/trad',
       element:<FetchOld/>,
      },
      {
       path:'/rq',
       element:<FetchRQ/>,
      },
    ]
  }
])

const App=()=>{
  const queryClient=new QueryClient();
 return <QueryClientProvider client={queryClient}>
       <RouterProvider router={router}> </RouterProvider>
 </QueryClientProvider>
}

export default App;












// How It Works
// When the application starts, the App component is rendered.

// The QueryClientProvider makes the queryClient available to all components in the app.

// The RouterProvider sets up the routing configuration:

// The root path (/) renders the MainLayout component, which likely includes a header, footer, or sidebar.

// Inside the MainLayout, the nested routes determine which page component (Home, FetchOld, or FetchRQ) to render based on the URL.

// The @tanstack/react-query library is used to manage server state (e.g., fetching data) in a declarative and efficient way.



// App Component:-
// queryClient: A new instance of QueryClient is created. This is used to manage all the queries and caching in the application.

// QueryClientProvider: This wraps the entire application and provides the queryClient to all components.

// RouterProvider: This provides the router configuration (router) to the application, enabling routing.
