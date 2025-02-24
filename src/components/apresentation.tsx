export function Apresentation() {
  return (
    <>
      <p className="font-semibold text-lg  text-gray-300 justify-self-start font-poppins">
        Rhuan Guilherme
      </p>
      <h1 className="2xl:text-5xl xl:text-4xl lg:text-3xl font-semibold font-poppins">
        Desenvolvedor Full Stack
      </h1>
      <p className="text-gray-400 font-roboto text-sm xl:text-base">
        Seja bem vindo o meu portifolio, sou um desenvolvedor com experiência em
        tecnologias front-end e back-end. Minha especialidade é criar soluções
        eficientes usando Node.js e React. Explore meu portfólio para conhecer
        mais sobre meus projetos e habilidades.
      </p>
      <div className="flex gap-2.5">
        <a
          className="border-2 py-2 px-3 rounded-md border-gray-400 font-semibold font-poppins flex justify-center items-center gap-3.5"
          href="https://github.com/Rhuan-Guilherme"
          target="_blank"
        >
          <img className="w-6" src="./githubIcon.svg" alt="Logo Github" />
          Github
        </a>
        <a
          className="border-2 py-2 px-3 rounded-md border-gray-400 font-semibold font-poppins flex justify-center items-center gap-3.5"
          href="https://www.linkedin.com/in/rhuanguilherme23/"
          target="_blank"
        >
          <img className="w-6" src="./linkedinIcon.svg" alt="Logo linkedin" />
          Linkedin
        </a>
      </div>
    </>
  );
}
