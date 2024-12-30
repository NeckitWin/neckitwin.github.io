import Header from "./components/Header.tsx";
import Main from "./pages/Main/Main.tsx";
import RandomBackground from "./components/RandomBackground.tsx";

function App() {
    const emoji = "⭐";
    const colors = ["#ff6b6b"];

    return (
        <div className="relative">
            <RandomBackground emoji={emoji} colors={colors} count={30}/>

            <div className='container mx-auto max-w-5xl p-6 relative z-10 bg-neutral-800'>
                <Header/>
                <Main/>
            </div>
        </div>
    )
}

export default App;