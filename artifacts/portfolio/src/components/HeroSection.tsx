import coverImg from "@assets/COVER_1779125770237.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      <img
        src={coverImg}
        alt="Santosh Gurung"
        className="w-full h-screen object-cover object-center"
      />
    </section>
  );
}
