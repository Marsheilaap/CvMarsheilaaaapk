import Hero from "./components/hero";
import Riwayatpekerjaan from "./components/riwayatpekerjaan";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./sheila-style.css";

export default function CVonline() {
  return (   
    <section>
      <Hero/>
      <RiwayatPendidikan/>
      <Riwayatpekerjaan/>
    </section>
  );
}

