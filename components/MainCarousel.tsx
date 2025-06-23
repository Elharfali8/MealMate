import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MenuProps } from "@/utils/menu"
import Link from "next/link"
import Image from "next/image"

type Data = {
    data: MenuProps[]
}

const MainCarousel = ({data}:Data) => {
  return (
    <Carousel>
          <CarouselContent>
              {data.map((item) => {
                  const { id, path, image, name } = item
                  return (
                          <CarouselItem key={id} className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/6  " >
                      <Link href={`/menu/${path}`} key={id} className=" flex flex-col items-center bg-gray-200 rounded-lg p-4 transition-all ease-in-out duration-150 hover:scale-105 hover:bg-gray-300">
                               <Image
                                src={image}
                                alt={name}
                                width={200}
                                height={200}
                                className="rounded-lg h-32 w-32 object-cover"
                              />
                        <div className="mt-2">
                            <h3 className="text-lg font-semibold text-center">{name}</h3>
                    </div>
                      </Link>
                            </CarouselItem>
                  )
              })}
    
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  )
}

export default MainCarousel