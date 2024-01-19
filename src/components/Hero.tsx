export default () => {
  return(
    <div className="min-h-screen py-12 px-5 md:px-16">
      <div className="mt-28 flex flex-col">
        <div className="flex-1 py-10">
          <strong className="text-8xl">
            Creative. <br/>
            Duo.
          </strong>
        </div>

        <div className="flex-1 py-10 flex flex-col items-end">
          <div className="flex flex-col items-start gap-5">
            <p className="text-xl w-full max-w-xl text-zinc-400 text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eveniet libero quod quasi voluptate 
              minima officiis excepturi fugit hic perferendis recusandae.
            </p>

            <div className="relative">
              <button className="button">
                Conheça mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}