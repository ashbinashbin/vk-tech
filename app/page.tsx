
import Header from "@/components/Header";
import PopularCourses from "@/components/PopularCourses"
import TaxPlanningSection from "@/components/TaxPlanningSection"
import Contact from "@/components/contact";
import WhyChooseVK from "@/components/why-choose/WhyChooseVK";
export default function Home() {
  return (
    <>
      
      <Header />
      <PopularCourses />
      <TaxPlanningSection/>
      <WhyChooseVK/>
      <Contact/>
      
    </>
  );
}
