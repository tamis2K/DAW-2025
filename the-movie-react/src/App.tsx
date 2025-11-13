import { Highlight } from "./components/layout/highlight";
import { MovieContent } from "./cases/movies/components/movie-content";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Navbar } from "./components/layout/navbar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Highlight />
        <Navbar />
        <MovieContent />
      </main>
      <Footer />
    </>
  );
}

export default App;
