import { Route, Routes } from "react-router-dom";
import Departments from "./employees/Departments";
import Employees from "./employees/Employees";

const ContentRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/deps" element={<Departments />} />
            <Route path="/mydep" element={<div>This is mydep page</div>} />
            <Route path="/emps" element={<Employees />} />
            <Route path="/newemp" element={<div>This is newemp page</div>} />
            <Route path="/empOT" element={<div>This is empOT page</div>} />
            <Route path="/myOT" element={<div>This is myOT page</div>} />
            <Route path="/empleave" element={<div>This is empleave page</div>} />
            <Route path="/myleave" element={<div>This is myleave page</div>} />
            <Route path="/allother" element={<div>This is allother page</div>} />
            <Route path="/myother" element={<div>This is myother page</div>} />
            <Route path="/empsalary" element={<div>This is empsalary page</div>} />
            <Route path="/mysalary" element={<div>This is mysalary page</div>} />
            <Route path="/empcontract" element={<div>This is empcontract page</div>} />
            <Route path="/mycontract" element={<div>This is mycontract page</div>} />
            <Route path="/career" element={<div>This is career page</div>} />
        </Routes>
    );
};
export default ContentRoutes;