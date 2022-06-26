import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StoreState } from "../store/reducer";


export const useTypedSelector:TypedUseSelectorHook<StoreState> = useSelector;