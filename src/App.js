import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import configureStore, { history } from "./redux/store";
import { appRoutes } from './shared/rounting';
import LayoutComponent from "./component/common/Layout";
import ToastComponent from "./component/common/ToastComponent";
import ModalComponent from "./component/common/ModalComponent";

import './styles/globals.scss';

export const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <ToastComponent />
        <ModalComponent />
        <LayoutComponent>
          <Switch>
            <Route exact path="/">
              <Redirect to="/employee/list" />
            </Route>
            {appRoutes.map((route, idx) => {
              return (
                <Route
                  key={idx}
                  exact={route.exact ? route.exact : false}
                  path={route.path}
                  component={route.component}
                />
              )
            })
            }
          </Switch>
        </LayoutComponent>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
