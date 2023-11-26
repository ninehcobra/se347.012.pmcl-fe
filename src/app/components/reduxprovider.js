'use client';

//redux
import { Provider } from 'react-redux';
import { store } from "../../redux/store"
import { getUserAccount } from '@/services/userService';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { loginRedux } from '@/redux/actions/loginAction';
import { AuthCheck } from './authcheck';


export function ReduxProvider({ children }) {


    return <Provider store={store}>
        {children}
    </Provider>;
}