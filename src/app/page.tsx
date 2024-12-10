import HeroSection from "./home/HeroSection";
import FeaturedProducts from "./home/FeaturedProducts";
import LatestProducts from "./home/LatestProducts";
import OfferProducts from "./home/Offer";
import { BannerPage } from "./home/BannerPage";
import TrendingProducts from "./home/TrendingProducs";
import DiscountItems from "./home/DiscountItems";
import Categories from "./home/Categories";
import Banner from "./home/Banner2";
import Blogs from "./home/LatestBlog";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProducts/>
      <LatestProducts/>
      <OfferProducts/>
      <BannerPage/>
      <TrendingProducts/>
      <DiscountItems/>
      <Categories/>
      <Banner/>
      <Blogs/>
    </div>
  );
}
