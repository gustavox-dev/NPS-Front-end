import { BrowserRouter, Route, Routes } from "react-router-dom"

import FirstQuestion from "./pages/FirstQuestion"

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<FirstQuestion/>} path="/question/1" />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;