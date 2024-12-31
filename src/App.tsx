import Header from "./components/Header.tsx";
import Main from "./pages/Main/Main.tsx";
import RandomBackground from "./components/RandomBackground.tsx";

function App() {

    return (
        <>
            <RandomBackground emoji={"🔧"} count={30}/>

            <div className='container mx-auto max-w-5xl p-6 relative z-10 bg-neutral-800'>
                <Header/>
                <Main/>
            </div>
        </>
    )
}

export default App;