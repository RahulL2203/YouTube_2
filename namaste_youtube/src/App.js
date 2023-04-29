
import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import WatchPage from "./Components/WatchePage";
import { Provider} from 'react-redux';
import store from './Utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import Demo from './Components/Demo';
import Demo2 from './Components/Demo2';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>,
      },
      {
        path:"watch",
        element:<WatchPage/>,
      },
      {
        path:"demo",
        element:(
        <>
           <Demo/>
           <Demo2/>
        </>
        ),
      },
      



    ]
  }
])
function App() {
  return (
    <Provider store ={store}>
    <div className="my-5">
    
      <Head/>
      <RouterProvider router={appRouter}/>

      {/**
       * Head
       * Body
       *   SideBar
       *      MenuItems
       *   MainContainer
       *      ButtonList
       *      VideoContainer
       *        VideoCard
       */}
    </div>
    </Provider>
  );
}

export default App;
