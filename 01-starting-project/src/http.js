export async function fetchAvaliablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  if (!response.ok) {
    //200 300 if ok else 400or 500
    throw new Error("Failed to fetch places");
  }
  return resData.places;
}

export async function updateUserPlaces(places) {
  //place is array of obj
  console.log("places are" + places);
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();
  console.log(resData);
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();
  if (!response.ok) {
    //200 300 if ok else 400or 500
    throw new Error("Failed to fetch user places");
  }
  return resData.places;
}
