import { MovieContent } from "./cases/movies/components/movie-content";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Navbar } from "./components/layout/navbar";
import { MovieContextProvider } from "./cases/movies/context/movie-context";
import { Highlight } from "./components/layout/highlight";

function App() {
  return (
    <>
      <Header />
      <main>
        <MovieContextProvider>
          <Highlight />
          <Navbar />
          <MovieContent />
        </MovieContextProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;
