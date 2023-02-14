import { BrowserRouter, Route, Routes } from "react-router-dom"

import FirstQuestion from "./pages/FirstQuestion"
import SecondQuestion from "./pages/SecondQuestion"
import ThirdQuestion from "./pages/ThirdQuestion"
import Success from "./pages/Success"
import { Questions } from "./pages/Questions"
import Modal from "./components/Modal"

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Questions/>} path="/satisfactionRating/:id/questions" />
                {/* <Route element={<Questions/>} path="/question/:id" /> */}
                {/* <Route element={<Questions/>} path="/question/:id" /> */}
                <Route element={<Success />} path="/success" />
                {/* <Route element={<Questions />} path="/questions" /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;