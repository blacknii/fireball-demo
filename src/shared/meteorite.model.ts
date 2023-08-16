export interface Meteorite {
  name: string;
  id: string;
  nameType: string;
  recClass: string;
  mass: string;
  fall: string;
  year: string;
  recLat: string;
  recLong: string;
  geolocation: {
    latitude: string;
    longitude: string;
  };
}
