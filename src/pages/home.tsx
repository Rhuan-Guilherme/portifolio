import { Apresentation } from '../components/apresentation';
import { Header } from '../components/header';

export function HomePage() {
  return (
    <>
      <title>Rhuan Guilherme</title>
      <Header />
      <main className="bg-gray-950 min-h-screen text-gray-50 2xl:px-70 xl:px-50 px-30 grid grid-cols-3 items-center justify-end">
        <section className="space-y-1 col-span-2 2xl:max-w-180">
          <Apresentation />
        </section>

        <div className="shadow-neon justify-self-end">
          <img
            className="border-2 p-1 rounded-xl border-indigo-950 2xl:w-75 xl: w-60"
            src="./rhuan.png"
            alt="Rhuan Guilherme - Homem pardo com um terno azul e gravata vermelha, em frente a um computador."
          />
        </div>

        <span className="absolute bottom-5 right-1/2 animate-bounce text-gray-500 flex flex-col items-center font-semibold">
          Scroll
          <img className="w-6" src="./arrowBotton.svg" alt="" />
        </span>
      </main>
    </>
  );
}
