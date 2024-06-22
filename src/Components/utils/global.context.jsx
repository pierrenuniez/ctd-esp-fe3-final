import { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";

export const ContextGlobal = createContext();

const lsFav = JSON.parse(localStorage.getItem('fav')) || [];

const reducer = (state, action) => {

  switch (action.type) {
    case 'TOGGLE_THEME':
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      return {...state, theme: newTheme};
      case 'GET_DENTISTS':
        return {...state, dentists: action.payload};
        case 'ADD_FAV':
          return {...state, fav: [...state.fav, action.payload]};
  }
};

export const initialState = {theme: "", dentists: [], fav: lsFav}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => {
      dispatch({type:'GET_DENTISTS', payload: res.data});
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(state.fav));
  }, [state.fav]);

  useEffect(() => {
    if (state.theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [state.theme]);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
