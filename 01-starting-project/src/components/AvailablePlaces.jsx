import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvaliablePlaces] = useState([]);
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      console.log(resData);
      setAvaliablePlaces(resData.places);
      setIsFetching(false);
    }
    fetchPlaces();
    // fetch("http://localhost:3000/places")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((resData) => {
    //     console.log(resData.places);
    //     setAvaliablePlaces(resData.places);
    //   });
  }, []);

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
