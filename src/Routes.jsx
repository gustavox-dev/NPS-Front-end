import { BrowserRouter, Route, Routes } from "react-router-dom"

import FirstQuestion from "./pages/FirstQuestion"
import SecondQuestion from "./pages/SecondQuestion"
import ThirdQuestion from "./pages/ThirdQuestion"
import Success from "./pages/Success"

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<FirstQuestion/>} path="/firstQuestion" />
                <Route element={<SecondQuestion/>} path="/secondQuestion" />
                <Route element={<ThirdQuestion/>} path="/thirdQuestion" />
                <Route element={<Success />} path="/success" />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;