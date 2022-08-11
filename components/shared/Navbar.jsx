import Image from "next/image";
import Link from "next/link";
import Search from "../Navigation/Search.component";

function Navbar() {
  return (
    <header className="flex">
      <div>
        <Image src="/logo.png" width="100" height="100" objectFit="cover" />
      </div>
      <div>
        <Search />
      </div>
      <nav>
        <ul className="flex">
          <li>
            <Link href="/">
              <a className="text-white under-none text-normal-size">Anasayfa</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-white under-none text-normal-size">Konular</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-white under-none text-normal-size">Profil</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
