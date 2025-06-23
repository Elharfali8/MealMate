import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"

const MainCard = ({name, image}: {name: string, image: StaticImageData}) => {
  return (
      <Card>
          <Image src={image} alt={name} className="w-full h-auto" />
        <CardHeader>
          <CardDescription>Card Title</CardDescription>
        </CardHeader>
      </Card>
  )
}

export default MainCard