import {useMediaQuery} from "react-responsive";
const useMedia = (min, max) => {
  let parameters = {};
  if (min !== undefined) parameters.minWidth = min;
  if (max !== undefined) parameters.maxWidth = max;
  return useMediaQuery(parameters);
};
export default useMedia;