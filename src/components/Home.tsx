import Navbar from "./Navbar";

function Home() {
  return (
    <div className="px-7 sm:px-7 md:px-[9rem]">
      <Navbar />
      <div className="pt-14 md:pt-[200px]">
        <h2 className="text-3xl/10">
          Hello 👋, I'm Sandipan Kalita
          <br />
          you can call me Sandip, a passionate
        </h2>
        <span className="text-[4rem] font-[monospace] half-highlight-accent-bg">
          Full Stack Developer
        </span>
      </div>
    </div>
  );
}

export default Home;
