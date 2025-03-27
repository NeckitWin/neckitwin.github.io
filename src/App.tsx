import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import ParticlesBackground from "./components/ParticlesBackground.tsx";

function App() {


    return (
        <>
            <div className='container mx-auto max-w-5xl p-6 relative z-10'>
                <Header/>
                <Main/>
                <Footer />
            </div>
            <ParticlesBackground />
        </>
    )
}

export default App;