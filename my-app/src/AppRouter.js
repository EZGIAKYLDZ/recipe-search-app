import { Route, Routes } from "react-router-dom"


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/user" element={<h1>User page</h1>} />
            <Route path="/settings" element={<h1>Settings page</h1>} />
        </Routes>
    )
}