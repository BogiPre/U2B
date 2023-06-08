import { A } from "@solidjs/router";
import Sidebar from "./components/sidebar";
import { useRoutes } from "@solidjs/router";
import routes from "./routes";

export default function App() {
  const Routes = useRoutes(routes);

  return (
    <div class="h-screen w-full flex">
      <Sidebar />
      <div class="w-full h-full">
        <Routes />
      </div>
    </div>
  );
}
