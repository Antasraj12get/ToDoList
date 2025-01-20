function Header() {
    return (
        <>
            <nav className="flex justify-around items-center text-xl font-serif w-full bg-sky-400 py-3">
                <span className="logo text-2xl hover:cursor-pointer duration-500 font-bold font-mono">
                    List Builder
                </span>
                <ul className="items list-none flex">
                    <li className="mx-3 hover:cursor-pointer duration-500 hover:underline">Tasks</li>
                    <li className="mx-3 hover:cursor-pointer duration-500 hover:underline">Completed</li>
                    <li className="mx-3 hover:cursor-pointer duration-500 hover:underline">Remains</li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
