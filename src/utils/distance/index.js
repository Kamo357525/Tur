export function distance(lat1, lon1, lat2, lon2) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    let radlat1 = (Math.PI * lat1) / 180;
    let radlat2 = (Math.PI * lat2) / 180;
    let theta = lon1 - lon2;
    let radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    let distWithText = '0 m';
    if (dist > 1) {
      dist = 1;
    }

    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    // dist to kilometers
    dist = dist * 1.609344;
    distWithText = Math.round(dist) + ' ' + 'km';
    // dist to meters
    if (dist < 1) {
      dist = dist * 1000;
      distWithText = Math.round(dist) + ' ' + 'm';
    }

    return distWithText;
  }
}
