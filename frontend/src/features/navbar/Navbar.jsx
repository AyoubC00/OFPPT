const Navbar = () =>
{
    return (
        <nav className="bg-white w-full py-6 fixed z-50 shadow-md top-0">
            <ul className="w-5/6 px-16 mx-auto flex gap-6 [&>*]:text-lg [&>*:hover]:text-blue-gray-500">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Les filières</a></li>
                <li><a href="#">A propos</a></li>
            </ul>
        </nav>
    )
}

export default Navbar