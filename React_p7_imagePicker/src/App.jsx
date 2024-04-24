import { useEffect, useRef, useState } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";

import { sortPlacesByDistance } from "./loc.js";

const storeIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storeIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  // const modal = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectedPlace = useRef();
  const [availablePlaces, setAvaliablePlaces] = useState([]);
  // picked places
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  // get current location of the current user
  // getCurrentPosition may take some time to fetch the current location of the user so we'll use the callback function
  // useEffect
  // useeffect takes the two parameter  1st one is the function that handles the callback and the 2nd oone is the array of dependencies to handle the function
  // if dependencies is not specified then it function will execute infinitly.
  // the useeffect() function is executed after the component in which the useEffect() hook is executed is fully executed.
  //the useeffect hooks is re-executed wheever the value of dependencies are changed  else it will not reexecute.
  // we can simply put the empty array if we  want  useEffect() function to not run infinitely as empty array means that the dependencies value is not changed.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const shortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvaliablePlaces(shortedPlaces);
      // here when we trigger the render for App component and it is reexecuted which will reexecute the navigator to get the current location and again  it will  set the  state which will again execute the App component and navigator  function and again it will set the state variable and this process continues infinetly.
      // so  handling sideeffect  has a very serious flaw by this process.so solution is to use the useEffect() hook provided by the react to handle the sideeffect.
    });
  }, []);

  // navigator.geolocation.getCurrentPosition((position) => {
  //   const shortedPlaces = sortPlacesByDistance(
  //     AVAILABLE_PLACES,
  //     position.coords.latitude,
  //     position.coords.longitude
  //   );
  //   setAvaliablePlaces(shortedPlaces);
  //   // here when we trigger the render for App component and it is reexecuted which will reexecute the navigator to get the current location and again  it will  set the  state which will again execute the App component and navigator  function and again it will set the state variable and this process continues infinetly.
  //   // so  handling sideeffect  has a very serious flaw by this process.so solution is to use the useEffect() hook provided by the react to handle the sideeffect.
  // });
  // the avove navigator callback task is the sideeffect in the js because:
  // 1. this  task is not directly releated to the  primaiary objective of the App() component as the main task of the App() component is to return the  jsx code and it should only consits of functions or code that would help in returning the jsx code like deleating the image rendering the image and so on .
  // 2. the avove task is not performed instantly but it takes the time to get the current location of the user and is executed after the App() component is executed .

  // now  we need to  use the shortedPlaes in the Places component in the jsx code below. but we donot get the shorted places in the first render of jsx so we need to trigger the event and use state to trigger the second render .
  function handleStartRemovePlace(id) {
    // modal.current.open();
    setIsModalOpen(false);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    // modal.current.close();
    setIsModalOpen(false);
  }

  function handleSelectPlace(id) {
    console.log("id is" + id); // p1,p2,p3
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    //  the code below is a sideeffect too but we donot need to use the useEffect() hook because
    // 1.it cannot be used inside the function /
    // 2. this code execute only when the user has clicked on btn not when app component renders so  this will not cause the infinite loop.
    const storeIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []; //get the already exiting item on the local storage and if false return empty array
    //storeIds return Array
    console.log(storeIds);
    // id==>  id of the place selected by user

    if (storeIds.indexOf(id) === -1) {
      //if index of p1=== -1 ie p1 is not in an storeIds array ,store that id in a localstorage
      localStorage.setItem("selectedPlaces", JSON.stringify([id, ...storeIds])); //store all the image with ids and all the item in the  storeIds array
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    // modal.current.close();
    setIsModalOpen(false);
    console.log("s", selectedPlace.current);
    const storeIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storeIds.filter((id) => id !== selectedPlace.current))
      // if the id of stored item is same as the  id of the selected item return false.
    );
  }

  return (
    <>
      <Modal open={isModalOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt='Stylized globe' />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title='Available Places'
          places={availablePlaces}
          fallbackText='Soting places by distances...'
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
