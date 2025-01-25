// import { useDispatch as useReduxDispatch } from 'react-redux';

// type AppDispatch = (action: any) => void;


import { AppDispatch } from '@/redux/store';
import { useDispatch as useReduxDispatch } from 'react-redux';

export const useDispatch = (): AppDispatch => useReduxDispatch();
