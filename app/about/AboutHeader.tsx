export default function AboutHeader() {
  return (
    <div className="container">
      <div className="e-con-inner">
        <section className="relative flex items-center justify-center">
          <div className="flex flex-col items-center md:w-3/4 lg:w-3/5 gap-4 text-center">
            <h1 className="font-semibold text-4xl sm:text-[40px] xl:text-[56px] leading-[1.2]">
              About Us
            </h1>
            <p className="sm:text-lg text-muted-foreground">
              Transforming regulatory complexity into competitive advantage
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
