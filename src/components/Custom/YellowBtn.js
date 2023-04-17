import Link from "next/link"
const YellowBtn = ({text}) => {
  return (
    <Link href="/business" legacyBehavior>
    <button className="bg-primaryYellow hover:bg-btnHoverYellow h-10 text-black font-medium w-40 rounded-md text-lg">{text}</button>
    </Link>
    )
}

export default YellowBtn