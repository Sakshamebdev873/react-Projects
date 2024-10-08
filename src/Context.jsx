import { createContext, useContext, useState,useEffect} from "react";
import CartItems from "./data";
import { useReducer } from "react";
import Reducer from "./Reducer";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [cart, setcart] = useState(CartItems);
  const initialState = {
    cart: CartItems,
    total: 0,
    amount: 0,
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  const clearbtn = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])
  return (
    <AppContext.Provider value={{ ...state, clearbtn,remove,increase,decrease }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
