export default () => {
  return(
    <div className="mt-20 px-5 md:px-16">
      <div className="flex items-center gap-10">
        <strong className="text-7xl">
          Nossos serviços
        </strong>

        <span className="py-2 px-3 rounded-full border border-zinc-700 text-zinc-400 text-xs font-bold">
          03 serviços
        </span>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <span className="text-zinc-500">
            001
          </span>

          <div className="py-5 md:py-10 border-y">
            <h1 className="text-2xl font-bold">Branding para agências</h1>
          </div>
        </div>

        <div>
          <span className="text-zinc-500">
            002
          </span>

          <div className="py-5 md:py-10 border-y">
            <h1 className="text-2xl font-bold">Branding para agências</h1>
          </div>
        </div>

        <div>
          <span className="text-zinc-500">
            003
          </span>

          <div className="py-5 md:py-10 border-y">
            <h1 className="text-2xl font-bold">Branding para agências</h1>
          </div>
        </div>
      </div>
    </div>
  );
}