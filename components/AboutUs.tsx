import Image from 'next/image'
import React from 'react'
import aboutImage from '@/public/assets/about.jpg'

const AboutUs = () => {
  return (
    <section className='py-12 lg:py-20 lg:mt-10'>
          <div className='container max-w-[1100px] xl:max-w-[1200px]  2xl:max-w-[1400px] mx-auto px-4 lg:px-2 xl:px-0'>
            <div className="grid place-items-center">
                <div className="flex items-center gap-8 lg:justify-between flex-col lg:flex-row ">
                    <div className='max-w-2xl'>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Us</h2>
                        <p className="text-muted-foreground mb-2">
                            At MealMate, we believe that planning your meals should be both easy and enjoyable.
                            Our platform combines powerful tools with a modern design to help you find, save, and plan delicious recipes — tailored to your lifestyle.
                        </p>
                        <p className="text-muted-foreground mb-2">
                            Whether you're a beginner in the kitchen or a seasoned cook, we’ve got something for everyone. Explore random meals, save your favorites, and create your custom meal plans with just a few clicks.
                        </p>
                        <button className="mt-2 px-6 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                            Learn More
                        </button>
                </div>
                <div className="">
          <Image
            src={aboutImage}
            alt="About Us"
            width={600}
            height={400}
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
                </div>
            </div>
            </div>
    </section>
  )
}

export default AboutUs