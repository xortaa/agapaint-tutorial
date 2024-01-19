import whatever from "@/styles/navbar.module.scss"
import Link from "next/link"
function Navbar() {
  return (
    <div className={whatever.flex}>
      <Link href='/'>
        <h1>Navbar</h1>
      </Link>
      <div className={whatever.nav_item}>
        <Link href="about">
          <p>About</p>
        </Link>
        <Link href="contact">
          <p>Contact</p>
        </Link>
        <Link href="/auth/login">
          <button >Sign In</button>
        </Link>
      </div>
    </div>
  )
}
export default Navbar
