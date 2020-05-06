import React from 'react';
/* 
  usePeristedState is a custom hook that stoes our state to local storage.
    1. Accepts a key to store the state under & default value
    2. return the same API as useState
*/


export default function usePersistedState(key, defaultValue) {
 const [state, setState] = React.useState(() => {
   const persistedValue =
    typeof window !== 'undefined' && window.localStorage.getItem(key);

    return persistedValue !== null ? JSON.parse(persistedValue) : defaultValue;
 });

 React.useEffect(() => {
  window.localStorage.setItem(key, JSON.stringify(state))//local storage can only store strings, state is set as a JSON 
 }, [key, state]); // whenever the key or state changed, useEffect fires off the function stored in it
 return [state, setState];

}