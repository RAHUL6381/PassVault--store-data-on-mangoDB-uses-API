import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PassManager from "./components/PassManager";
import SemiNav from "./components/SemiNav";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SemiNav />

      <main className="grow px-6">
        <PassManager />
      </main>

      <Footer />
    </div>
  );
}

export default App;
