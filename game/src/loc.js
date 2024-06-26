function toRad(value) {
  return (value * Math.PI) / 180;
  //convert the degreee to radian
  //  360deg=2PI rad
  // 1deg=2PI/360=PI/180 rad
}

function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; //radius of earth
  const dLat = toRad(lat2 - lat1); //latitude difference between two points
  const dLon = toRad(lng2 - lng1); //lngitude difference between two points
  const l1 = toRad(lat1); // latitude
  const l2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2); // haversine formula two calculate the shortest distance between two points in the   sphere
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

export function sortPlacesByDistance(places, lat, lon) {
  const sortedPlaces = [...places];
  sortedPlaces.sort((a, b) => {
    const distanceA = calculateDistance(lat, lon, a.lat, a.lon);
    const distanceB = calculateDistance(lat, lon, b.lat, b.lon);
    return distanceA - distanceB;
  });
  return sortedPlaces;
}
