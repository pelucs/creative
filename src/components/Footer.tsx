import Link from "next/link";

export default () => {
  return(
    <div className="px-5 md:px-16 py-10 flex flex-col gap-10 bg-black text-center">
      <div className="flex items-center justify-center md:justify-start gap-10">
        <Link href="/" className="uppercase text-sm">Home</Link>
        <Link href="/" className="uppercase text-sm">Projetos</Link>
        <Link href="/" className="uppercase text-sm">Serviços</Link>
        <Link href="/" className="uppercase text-sm">Contato</Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500 font-medium">
        <span>©Creative 2023 - Todos os direitos reservados</span>
        <span>Desenvolvido por Pedro Lucas</span>
      </div>
    </div>
  );
}