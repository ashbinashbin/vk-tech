import Navbar from "@/components/navbar";
import Header from "@/components/Header";
import PopularCourses from "@/components/PopularCourses"
import TaxPlanningSection from "@/components/TaxPlanningSection"
import Contact from "@/components/contact";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <PopularCourses />
      <TaxPlanningSection/>
      <Contact/>
    </>
  );
}
