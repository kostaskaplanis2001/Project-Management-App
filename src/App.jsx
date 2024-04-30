import ProjectSidebar from "./components/ProjectSidebar.jsx";
import logo from "./assets/no-projects.png";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
