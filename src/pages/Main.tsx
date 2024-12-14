const section = (caption:string) => {
    return (
        <div
            className='text-center py-4 px-5 rounded-xl shadow-md shadow-bgColor bg-bgColor/50 text-textColor text-3xl underline underline-offset-8 decoration-primary font-medium m-2'>
            {caption}
        </div>
    )
}

function Main() {
    return (
        <main>
            <section className='my-10 mx-1 text-textColor flex flex-col gap-2'>
                <div className='flex flex-row'>
                    <h1 className='text-2xl font-medium'>Hi, Im Nikita</h1>
                    <span
                        className='bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-2 py-1 flex items-center mx-2 mb-2.5 text-xs'>Fullstack</span>
                </div>
                <p>Im a fullstack developer, I love to code and learn new things. I have experience in web development
                    and I am currently learning mobile development.</p>
            </section>
            {section('Projects')}
            {section('Languages and Tools')}
        </main>
    )
}

export default Main;