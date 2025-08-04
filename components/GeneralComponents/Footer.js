import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
  <div className="bg-green-950 font-merry relative">
  <div className='absolute left-4 -top-7 w-20 md:w-32 !z-30'>
          <Image src={'https://cl85-next.s3.ap-south-1.amazonaws.com/home/5.png'} width={400} height={400} alt='corn image' className='rotate-45 w-full h-full object-contain'></Image>
        </div>
      <footer className="lg:max-w-[1300px] px-5 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 pt-10 lg:pt-12 mb-16 lg:mb-8">
          <div className="col-span-full lg:col-span-1">
            <div className="mb-2">
              <Link href="/" aria-label="Home Page">
                  <Image
                    className="w-[150px] rounded-lg lg:w-[150px]"
                    src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/logo.png"
                    alt="Freshcon"
                    width={150}
                    height={150}
                  />
               
              </Link>
            </div>
            <p className="text-white text-sm mb-6">
            Crafting convenience with home-cooked quality. Freshcon brings warmth to every meal.
            </p>
          </div>
          <div className="lg:ml-20">
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">Quick Links</div>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-100 hover:text-white">Home</Link>
              <Link href="/about" className="text-gray-100 hover:text-white">About Us</Link>
              {/* <Link href="/products" className="text-gray-100 hover:text-white">Products</Link> */}
              <Link href="/faqs" className="text-gray-100 hover:text-white">FAQs</Link>
              <Link href="/privacy-policy" target='blank' className="text-gray-100 hover:text-white">Privacy Policy</Link>
              <Link href="/contact-us" className="text-gray-100 hover:text-white">Contact Us</Link>
            </nav>
          </div>
          <div className="lg:ml-10">
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">Products</div>
            <nav className="flex flex-col gap-2.5">
            <Link href="/products/pre-cooked-kabuli-chana" className="text-gray-100 hover:text-white">Pre-cooked Kabuli Chana</Link>
            <Link href="/products/pre-cooked-rajma" className="text-gray-100 hover:text-white">Pre-cooked Rajma</Link>
            <Link href="/products/pre-cooked-kala-chana" className="text-gray-100 hover:text-white">Pre-cooked Kala Chana</Link>
            <Link href="/products/pre-cooked-sweet-corn" className="text-gray-100 hover:text-white">Pre-cooked Sweet Corn</Link>
            <Link href="/products/frozen-shredded-coconut" className="text-gray-100 hover:text-white">Frozen Shredded Coconut</Link>
            </nav>
          </div>
          <div className="lg:ml-10">
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">Support</div>
            <nav className="flex flex-col gap-4">
              {/* <div className="">
                <Link href="tel:+919584584845" className="flex items-start group">
                  <div className="rounded-full w-8 h-8 flex items-center justify-center">
                    <svg className="w-8" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="17.5" cy="17.5" r="17.5" fill="white" fillOpacity="0.13"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M20.5 11.125C20.5 10.9592 20.5659 10.8003 20.6831 10.6831C20.8003 10.5658 20.9593 10.5 21.125 10.5H24.875C25.0408 10.5 25.1998 10.5658 25.317 10.6831C25.4342 10.8003 25.5 10.9592 25.5 11.125V14.875C25.5 15.0408 25.4342 15.1997 25.317 15.3169C25.1998 15.4342 25.0408 15.5 24.875 15.5C24.7093 15.5 24.5503 15.4342 24.4331 15.3169C24.3159 15.1997 24.25 15.0408 24.25 14.875V12.6333L20.3167 16.5667C20.2595 16.6281 20.1905 16.6773 20.1138 16.7115C20.0371 16.7456 19.9544 16.764 19.8705 16.7655C19.7865 16.767 19.7032 16.7515 19.6254 16.7201C19.5475 16.6887 19.4768 16.6419 19.4175 16.5825C19.3581 16.5232 19.3114 16.4525 19.2799 16.3747C19.2485 16.2968 19.2331 16.2135 19.2345 16.1296C19.236 16.0456 19.2544 15.9629 19.2885 15.8862C19.3227 15.8096 19.372 15.7406 19.4334 15.6833L23.3667 11.75H21.125C20.9593 11.75 20.8003 11.6842 20.6831 11.5669C20.5659 11.4497 20.5 11.2908 20.5 11.125Z" fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.25 11.75C9.25 11.087 9.51339 10.4511 9.98223 9.98223C10.4511 9.51339 11.087 9.25 11.75 9.25H12.8933C13.61 9.25 14.235 9.73833 14.4092 10.4333L15.33 14.1192C15.4046 14.4175 15.3895 14.7312 15.2867 15.021C15.1838 15.3108 14.9977 15.5638 14.7517 15.7483L13.6742 16.5567C13.5617 16.6408 13.5375 16.7642 13.5692 16.85C14.0395 18.129 14.7822 19.2906 15.7458 20.2542C16.7094 21.2178 17.871 21.9605 19.15 22.4308C19.2358 22.4625 19.3583 22.4383 19.4433 22.3258L20.2517 21.2483C20.4362 21.0023 20.6892 20.8162 20.979 20.7133C21.2688 20.6105 21.5825 20.5954 21.8808 20.67L25.5667 21.5908C26.2617 21.765 26.75 22.39 26.75 23.1075V24.25C26.75 24.913 26.4866 25.5489 26.0178 26.0178C25.5489 26.4866 24.913 26.75 24.25 26.75H22.375C15.1267 26.75 9.25 20.8733 9.25 13.625V11.75Z" fill="white"/>
                    </svg>
                  </div>
                  <div className="ml-3 mt-0.5 flex-col w-full h-auto text-left text-gray-100 hover:text-white">+91 9584584845</div>
                </Link>
              </div> */}
              <Link href="mailto:freshconindia@gmail.com" className="flex items-start group cursor-pointer duration-150">
                <div className="rounded-full relative w-8 h-8 flex items-center justify-center">
                  <svg className="w-8" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.5" cy="17.5" r="17.5" fill="white" fillOpacity="0.13"/>
                    <path d="M9.25 15.225V22.375C9.25 23.038 9.51339 23.6739 9.98223 24.1428C10.4511 24.6116 11.087 24.875 11.75 24.875H24.25C24.913 24.875 25.5489 24.6116 26.0178 24.1428C26.4866 23.6739 26.75 23.038 26.75 22.375V15.225L19.31 19.8025C18.916 20.0449 18.4626 20.1732 18 20.1732C17.5374 20.1732 17.084 20.0449 16.69 19.8025L9.25 15.225Z" fill="white"/>
                    <path d="M26.75 13.7567V13.625C26.75 12.962 26.4866 12.3261 26.0178 11.8572C25.5489 11.3884 24.913 11.125 24.25 11.125H11.75C11.087 11.125 10.4511 11.3884 9.98223 11.8572C9.51339 12.3261 9.25 12.962 9.25 13.625V13.7567L17.345 18.7383C17.542 18.8595 17.7687 18.9237 18 18.9237C18.2313 18.9237 18.458 18.8595 18.655 18.7383L26.75 13.7567Z" fill="white"/>
                  </svg>
                </div>
                <div className="ml-3 mt-0.5 w-full h-auto text-left text-gray-100 hover:text-white">freshconindia@gmail.com</div>
              </Link>
              <div className="w-full text-white">
                  <h4 className="text-white  text-lg font-bold">Bloomigale Innovations Pvt. Ltd.</h4>
                  <div className="w-full text-sm lg:text-base">404, Burlington, Hiranandani Estate, Patlipada , Thane West - 400607</div>
                  <div className="w-full text-sm mt-1.5 lg:text-base"><span className="font-semibold">Corporate Identity Number:-</span> U10750MH2024PTC434707</div>
                  
                </div>
            </nav>
          </div>
        </div>
      </footer>
      <div className="py-4 bg-gray-100/10 lg:pl-10 lg:pr-10 flex flex-col md:flex-row justify-center md:justify-between items-center text-gray-200">
        <Link className="font-medium text-xs text-center md:text-start hover:text-mgi-blue uppercase" href="/">© 2024 Freshcon</Link>
        <div className="flex text-center md:text-right text-sm">
          Designed And Developed By&nbsp;
          <Link href="https://triggrsweb.com" passHref>
      <span
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-xs hover:text-mgi-blue uppercase self-center"
      >
        TriggrsWeb Solutions
      </span>
    </Link>
        </div>
      </div>
    </div>
    </>
  )
}
