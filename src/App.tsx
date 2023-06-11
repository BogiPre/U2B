import Sidebar from "./components/sidebar";
import { useRoutes } from "@solidjs/router";
import routes from "./routes";
import FavList from "./components/fav-list";

export default function App() {
  const Routes = useRoutes(routes);

  return (
  <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /><div class="h-screen w-screen flex bg-gray-100">
      <Sidebar />
      <div class="w-full h-full overflow-hidden">
        <Routes />
      </div>
      <FavList />
    </div></>
  );
}
