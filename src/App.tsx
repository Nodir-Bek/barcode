import { Provider } from 'react-redux';
import AppRoutes from './routes';
import { store } from './redux/store';
import { BrowserRouter as RouterProvider } from 'react-router-dom';
import Modal from './components/modal';

const App = () => (
    <Provider store={store}>
        <RouterProvider>
            <AppRoutes />
            <Modal />
        </RouterProvider>
    </Provider>
)
export default App
