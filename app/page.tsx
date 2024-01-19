import Image from "next/image"
import homeStyles from "@/app/page.module.scss"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div>
      <div className={homeStyles.parent}>
        <h1 className={homeStyles.green}>This is inside the parent</h1>
      </div>
      <h1 className={homeStyles.green}>This is outside the parent</h1>
    </div>
  )
}
