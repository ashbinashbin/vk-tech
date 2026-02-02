import Navbar from "@/components/navbar";
import Header from "@/components/Header";
import PopularCourses from "@/components/PopularCourses"
import TaxPlanningSection from "@/components/TaxPlanningSection"
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <PopularCourses />
      <TaxPlanningSection/>
    </>
  );
}
