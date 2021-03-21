import Link from 'next/link';


export default function Layout({ children }) {
    return (
        <>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/results">
                    <a>Results</a>
                </Link>
                <Link href="/about-us">
                    <a>About us</a>
                </Link>
            </nav>

            <div className="container">{children}</div>
        </>
    )
}