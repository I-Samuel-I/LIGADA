import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Lenis from "lenis";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
