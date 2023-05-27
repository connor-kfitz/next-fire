import Link from "next/link";

export default function Navbar({ }) {
    const user: boolean = null;
    const username: boolean = null;

    const createPostStyle = {
        marginLeft: 'auto'
    }
  
    return (
      <nav className="navbar">
        <ul className="navbar__item-cont">
            <li className="navbar__item">
                <Link href="/">
                    <button className="navbar__logo">FEED</button>
                </Link>
            </li>
  
            {username && (
                <>
                    <li className="navbar__item" style={createPostStyle}>
                        <Link href="/admin">
                            <button className="navbar__create-post">Write Posts</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/${username}`}>
                            <img src={user?.photoURL} />
                        </Link>
                    </li>
                </>
            )}
            {!username && (
                <li className="navbar__item">
                    <Link href="/enter">
                        <button className="navbar__login">Log in</button>
                    </Link>
                </li>
            )}
        </ul>
      </nav>
    );
}