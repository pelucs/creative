export default () => {
  return(
    <div className="min-h-screen px-5 md:px-16 py-20 bg-black">
      <strong className="text-4xl md:text-7xl">
        Entre em contato
      </strong>

      <div className="flex flex-col md:flex-row gap-10 md:gap-60 mt-20">
        <div className="flex-1 space-y-10">
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-zinc-500">Nome</span>
              <input className="border px-4 py-2 outline-none bg-transparent"/>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-zinc-500">Sobrenome</span>
              <input className="border px-4 py-2 outline-none bg-transparent"/>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-zinc-500">Email</span>
            <input className="border px-4 py-2 outline-none bg-transparent"/>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-zinc-500">Menssagem</span>
            <textarea className="h-40 resize-none border px-4 py-2 outline-none bg-transparent"/>
          </div>

          <div className="flex justify-end">
            <button className="p-3 px-4 bg-white text-black font-bold uppercase text-sm">
              Enviar mensagem
            </button>
          </div>
        </div>

        <div className="w-full max-w-md border p-5 md:p-14 flex flex-col justify-between gap-10 text-sm">
          <div className="space-y-1">
            <h1 className="uppercase text-xs">Endereço</h1>
            <p>Rua Juscelino Kubitschek, Brasil</p>
          </div>

          <div className="space-y-1">
            <h1 className="uppercase text-xs">Contato</h1>
            <p>Telefone - 83 0000-0000</p>
          </div>

          <div className="space-y-1">
            <h1 className="uppercase text-xs">Sociais</h1>
            <p>01 - Instagram</p>
            <p>02 - Facebook</p>
            <p>03 - Twitter</p>
          </div>

        </div>
      </div>
    </div>
  );
}