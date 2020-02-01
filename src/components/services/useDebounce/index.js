// @flow
import * as React from "react";

export default function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    if (delay > 0) {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }
  }, [value, delay]);

  return debouncedValue;
}
// inspired by https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci