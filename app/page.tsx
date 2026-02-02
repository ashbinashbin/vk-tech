import Navbar from "@/components/navbar";
import Header from "@/components/Header";
import PopularCourses from "@/components/PopularCourses"
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <PopularCourses />
      <Contact/>
    </>
  );
}
