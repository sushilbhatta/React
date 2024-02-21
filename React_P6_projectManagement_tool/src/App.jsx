import AddProject from "./components/AddProject";
import ProjectSideBar from "./components/ProjectSideBar";
import ProjectIntro from "./components/ProjectIntro";
import { useRef, useState } from "react";
import { formattedDate } from "./util/date";
function App() {
  // State uplifting
  const [mainCreateBtn, setMainCreateBtn] = useState(null);
  const [sideBarCreateBtn, setSideBarCreateBtn] = useState(null);
  const [isCancel, setIsCancel] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [inputvalue, setInputvalue] = useState(
    { title: "" },
    { description: "" },
    { date: "" }
  );
  const titleName = useRef();
  const [enteredValue, setEnteredValue] = useState(null);

  console.log(titleName);
  function handleSaveClick() {
    setEnteredValue(titleName.current.value);
    titleName.current.value = "";
  }

  function handleChange(inputIdentifier, newValue) {
    setInputvalue((prev) => {
      return { ...prev, [inputIdentifier]: newValue };
    });
  }
  const projectlist = [];

  const handleButtonClick = () => {
    setMainCreateBtn((prevMainCreateBtn) => !prevMainCreateBtn);
    setSideBarCreateBtn((prevSideBarCreateBtn) => !prevSideBarCreateBtn);
  };
  function cancelBtnHandler() {
    setMainCreateBtn((prevMainCreateBtn) => !prevMainCreateBtn);
    setSideBarCreateBtn((prevSideBarCreateBtn) => !prevSideBarCreateBtn);
    setIsCancel((prev) => !prev);
  }

  return (
    <main className='flex items-center gap-10'>
      <ProjectSideBar
        addProjectHandler={handleButtonClick}
        isClick={sideBarCreateBtn}
        inputvalue={inputvalue}
      ></ProjectSideBar>

      <ProjectIntro
        addProjectHandler={handleButtonClick}
        isClick={sideBarCreateBtn}
      ></ProjectIntro>
      <AddProject
        isMainBtnclick={mainCreateBtn}
        isSideBarBtnClick={sideBarCreateBtn}
        handleCancel={cancelBtnHandler}
        isCancel={isCancel}
        handleChange={handleChange}
        SaveInputHandler={handleSaveClick}
        inputvalue={enteredValue}
      ></AddProject>
    </main>
  );
}

export default App;
