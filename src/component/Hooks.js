import { useState, useEffect } from "react";

function LocalStorage(key, initialState) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialState
  );
  
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

function SessionStorage(key, initialState) {
  const [state, setState] = useState(
    () => JSON.parse(window.sessionStorage.getItem(key)) || initialState
  );

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState]
}

export { LocalStorage, SessionStorage };