import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        setLastScrollY(window.scrollY);
        if ((window.scrollY > (window.scrollX + 200))) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY])

    return (
        showHeader ? <header className="App-header">
            <Link title='Home' to='/home'>Home</Link>
            <Link title='Contact' to='/contact'>Contact</Link>
            <Link title='About' to='/about'>About</Link>
            <Link title='F&Q' to='/faq'>F&Q</Link>
            <Link title='Help' to='/help'>Help</Link>
        </header> : <div></div>
    );
}

export default AppHeader;