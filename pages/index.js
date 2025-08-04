import Footer from "@/components/GeneralComponents/Footer";
import Header from "@/components/GeneralComponents/Header";
import AboutFreshcon from "@/components/Homepage/AboutFreshcon";
import Banner from "@/components/Homepage/Banner";
import Card from "@/components/Homepage/Card";
import Product from "@/components/Homepage/Product";
import WhyChoose from "@/components/Homepage/WhyChoose";
import AvailableOn from "@/components/AvailableOn";
import Review from "@/components/Homepage/Review";
import InstaVideos from "@/components/Homepage/InstaVideos";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <div className="bg-white">
      <Header/>
      <Banner/>
      <Card/>
      <AboutFreshcon/>
      <WhyChoose/>
      <Product/> 
      <AvailableOn/>
      <Review/>
      <InstaVideos/>
      <Footer/>
      </div>
    </>
  );
}
