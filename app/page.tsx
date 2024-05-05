import Image from "next/image";
import bg from "@/public/website/warhammer_homepage.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative min-h-screen min-w-screen">
      <Image src={bg} alt="landing page image" fill className="object-cover" />
      <Link href="">
        <Button className="bg-red-950 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
          Enter the Warhammer Universe
        </Button>
      </Link>
    </div>
  );
}
