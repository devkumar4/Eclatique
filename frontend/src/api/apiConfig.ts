// apiConfig.ts

export const API_URL_1 =
  import.meta.env.VITE_REACT_APP_API_URL_1 ||
  "http://localhost:8080/shop/allProducts";

export const getGeolocationURL = (
  latitude: number,
  longitude: number
): string => {
  return (
    import.meta.env.VITE_REACT_APP_API_URL_2 ||
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`
  );
};

export const API_URL_GET_USER =
  import.meta.env.VITE_REACT_APP_API_URL_3 ||
  "http://localhost:8080/user/getUser";
