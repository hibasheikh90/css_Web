import Link from "next/link";


export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header-inner">
          <h1 className="header-title">Dreamy Cake&apos;s</h1>

          <ul className="nav">
            <li className="nav-item nav-item:hover">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about" className="nav-item nav-item:hover">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-item nav-item:hover">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
