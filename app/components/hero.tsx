import foto from "../fotoo.jpg";

function Profile() {
  return <img src={foto.src} alt="Marsheila  Putri" className="fotoku" />;
}
export default function Hero() {
    return (
      <section>
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-400 font-bold">CV ONLINE</h1>
          <h2 className="text-3xl">Marsheila Putri Kirana</h2>
        </div>
        <Profile/>
        <p>Saya Adalah programer komputerisasi akuntansi</p>
      </section>
    );
  }
    
