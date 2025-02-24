export function Header() {
  return (
    <header className="fixed w-full flex h-15 justify-between items-center 2xl:px-70 xl:px-50 px-30 bg-gray-950 text-gray-300 font-semibold border-b border-gray-900">
      <div>Logo</div>
      <nav>
        <ul className="flex gap-5">
          <li>Início</li>
          <li>Skills</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}
