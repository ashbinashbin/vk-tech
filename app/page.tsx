import Navbar from "@/components/navbar";
import Header from "@/components/Header";
import PopularCourses from "@/components/PopularCourses"
import TaxPlanningSection from "@/components/TaxPlanningSection"
import Contact from "@/components/contact";
import Footer from "@/components/footer"
import WhyChooseVK from "@/components/why-choose/WhyChooseVK";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <PopularCourses />
      <TaxPlanningSection/>
      <WhyChooseVK/>
      <Contact/>
      <Footer/>
    </>
  );
}
