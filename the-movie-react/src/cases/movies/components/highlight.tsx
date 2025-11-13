export function Highlight() {
  const bgUrl = "/img/etT14XfDEqhQZdD47ywpyihXPyW.jpg";

  return (
    <section
      className="relative flex bg-black"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundPosition: "center", 
        backgroundSize: "cover",
      }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,17,17,1) 20%, rgba(17,17,17,0.7) 50%, rgba(17,17,17,0.7) 100%)",
        }}
      />

      <div className="relative z-20 flex gap-8 py-8 px-48 container mx-auto items-start">

        <img
          className="rounded-lg"
          src="/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
          alt="Capa filme"
        />

        <div className="flex flex-col">
          <h2 className="font-normal text-5xl pb-2">Como Treinar o seu Dragão</h2>

          <div className="text-sm my-2.5">
            <span className="bg-white/20 px-3 py-1 rounded-full mr-2">Fantasia</span>
            <span className="bg-white/20 px-3 py-1 rounded-full mr-2">Família</span>
            <span className="bg-white/20 px-3 py-1 rounded-full mr-2">Ação e Aventura</span>
            <span className="ml-4 text-gray-300">2h 5m</span>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-normal pt-16 pb-2">Sinopse</h4>
            <p className="text-gray-400 text-sm max-w-3xl leading-relaxed">
              Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se torna
              amigo de um dragão ferido chamado Banguela. Juntos, eles desafiam as tradições de suas
              tribos e descobrem que dragões não são os monstros que todos acreditavam ser.
            </p>
          </div>

          <div className="flex gap-4 my-6">
            <button className="bg-[#e50914] text-white font-bold px-6 py-3 rounded transition-colors duration-300 hover:bg-[#b8070f]">
              Assistir
            </button>
            <button className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded transition-colors duration-300 hover:bg-white/30">
              Detalhes
            </button>
            <button className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded transition-colors duration-300 hover:bg-white/30">
              + Adicionar à lista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
