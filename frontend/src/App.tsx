import { Button } from "@/components/ui/button"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
type Props = {}

export default function App({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
