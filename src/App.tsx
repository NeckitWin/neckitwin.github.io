import Header from "./components/Header.tsx";
import Main from "./pages/Main.tsx";

function App() {
    return (
        <div className='container mx-auto max-w-5xl p-6'>
            <Header/>
            <Main />
        </div>
    )
}

export default App;