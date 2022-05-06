import EmployeeListContainer from "../container/pages/EmployeeListContainer";
import EmployeeAddContainer from "../container/pages/EmployeeAddContainer";
import PageNotFound from "../container/pages/PageNotFound";

export const appRoutes = [
    {
        path: "/employee/list",
        exact: true,
        component: EmployeeListContainer
    },
    {
        path: "/employee/add",
        exact: true,
        component: EmployeeAddContainer,
    },
    {
        path: "/employee/edit/:id",
        component: EmployeeAddContainer
    },
    {
        path: "**",
        component: PageNotFound
    }
];