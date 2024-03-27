import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ChooseProfilePage from "./pages/ChooseProfilePage";
import BrowsePage from "./pages/BrowsePage";
import WatchPage from "./pages/WatchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  { path: "/choose-profile", element: <ChooseProfilePage /> },
  { path: "/browse", element: <BrowsePage /> },
  { path: "/watch/:id", element: <WatchPage /> },
  { path: "*", element: <div>Not Found</div> }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
