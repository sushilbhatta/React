import AddProject from "./components/AddProject";
import ProjectSideBar from "./components/ProjectSideBar";
import ProjectIntro from "./components/ProjectIntro";
import { useState } from "react";
function App() {
  const introPage = true;
  // State uplifting
  const [mainCreateBtn, setMainCreateBtn] = useState(null);
  const [sideBarCreateBtn, setSideBarCreateBtn] = useState(null);
  const handleButtonClick = () => {
    setMainCreateBtn(!mainCreateBtn);
    setSideBarCreateBtn(!sideBarCreateBtn);
  };

  return (
    <main className='flex items-center gap-10'>
      <ProjectSideBar
        addProjectHandler={handleButtonClick}
        isClick={sideBarCreateBtn}
      ></ProjectSideBar>
      <ProjectIntro
        introPage={introPage}
        addProjectHandler={handleButtonClick}
        isClick={sideBarCreateBtn}
      ></ProjectIntro>
      <AddProject
        isMainBtnclick={mainCreateBtn}
        isSideBarBtnClick={sideBarCreateBtn}
      ></AddProject>
    </main>
  );
}

export default App;
