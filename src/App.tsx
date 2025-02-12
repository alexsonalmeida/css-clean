import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Landing } from "./Landing"
import MainLayout from "./pages/components/Layout";
import { CodeSmells } from "./pages/CommunErrors/CodeSmells";
import { GoodPracticesPage } from "./pages/GoodPractices/GoodPracticesPage";
import { BoxShadowComponents } from "./pages/ComponentsPages/BoxShadow";
import { Introduction } from "./pages/GettingStarted/Introduction";
import { AboutTheProject } from "./pages/GettingStarted/AboutTheProject";
import { HowToContribute } from "./pages/GettingStarted/HowToContribute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
          <Route element={<MainLayout/>}>
          <Route path="/introduction" element={<Introduction/>}/>
          <Route path="/about-the-project" element={<AboutTheProject/>}/>
          <Route path="/how-to-contribute" element={<HowToContribute/>}/>
          <Route path="/code-smells" element={<CodeSmells/>}/>
          <Route path="/good-practices" element={<GoodPracticesPage/>}/>
          <Route path="/box-shadows-components" element={<BoxShadowComponents/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
