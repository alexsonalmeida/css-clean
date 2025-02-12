import { Banner } from "./components/landing/Banner";
import { BestPractices } from "./components/landing/BestPractices";
import { CodeExemples } from "./components/landing/CodeExemples";
import { ComponentsSection } from "./components/landing/ComponentsSection";
import Footer from "./components/landing/Footer";
import { Header } from "./components/landing/Header";

export function Landing() {
    return (
        <article className="flex flex-col gap-20 md:gap-32">
            <Header/>
            <Banner/>
            <BestPractices/>
            <CodeExemples/>
            <ComponentsSection/>
            <Footer/>
        </article>
    )
}