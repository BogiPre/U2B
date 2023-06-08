import { A } from "@solidjs/router";
import Sidebar from "./components/sidebar";
import { useRoutes } from "@solidjs/router";
import routes from "./routes";
import FavList from "./components/fav-list";

export default function App() {
  const Routes = useRoutes(routes);

  return (
    <div class="h-screen w-screen flex">
      <Sidebar />
      <div class="w-full h-full">
        <Routes />
      </div>
      <FavList />
    </div>
  );
}
