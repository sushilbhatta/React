import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvaliablePlaces } from "../http.js";
export default function AvailablePlaces({ onSelectPlace }) {
  // the below 3 state are important to have while fetching data from server
  const [isFetching, setIsFetching] = useState(false); //store the fetching state
  const [availablePlaces, setAvaliablePlaces] = useState([]); //store the array of all avaliable places
  const [error, setError] = useState(); //for updating ui with error message
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvaliablePlaces();

        // before setting the places, we need to short the places based on the users current location

        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvaliablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        console.log(error);
        setError({
          message:
            error.message || "Could not fetch places, please try again later!",
        });
        setIsFetching(false);
      }
    }
    fetchPlaces();
  }, []);
  if (error) {
    return <Error title='An error occured!' message={error.message}></Error>;
  }

  return (
    <Places
      title='Available Places'
      places={availablePlaces}
      isLoading={isFetching}
      loadingText='Fetching Place data...'
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  );
}
