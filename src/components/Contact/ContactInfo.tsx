import cake from '@/../public/cake.jpg'
import Image from 'next/image'

export default function ContactInfo() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Image src={cake} alt="Cake" className="w-10 h-10 rounded-full" />
        </div>
        <h1 className="text-black">Agatha Monique</h1>
      </div>
    </>
  )
}
