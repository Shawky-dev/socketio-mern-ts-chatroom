import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

type Props = {}

export default function App({}: Props) {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
