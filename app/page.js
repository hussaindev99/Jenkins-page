import Link from 'next/link';
import Image from 'next/image';
import Search from "@/public/images/search-icon.svg"
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Card from './card/Card';
import ImgCard from './imgcard/ImgCard';
import Lab from './open-source-lab/Lab';
import Footer from './footer/Footer';
export default function Home() {
  return (
    <div>
    <Navbar />
    <Header />
     <Card /> 
     <ImgCard />
     <Lab />
     <Footer /> 
    </div>
  );
}
