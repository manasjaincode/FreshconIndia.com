import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleOverlay = () => {
        var real = $(".side-overlay").find(".real");
        var virtual = $(".side-overlay").find(".virtual");
        if (real.hasClass("-translate-x-72")) {
            $(".side-overlay").fadeIn(0);
            virtual.fadeIn(100);
            real.removeClass("-translate-x-72");
            $("body").css("overflow", "hidden");
        } else {
            virtual.fadeOut(100);
            $("body").css("overflow", "auto");
            real.addClass("-translate-x-72");
            $(".side-overlay").fadeOut(150);
        }
    };

    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [activeCity, setActiveCity] = useState('Indore');
  
    const cityChange = (value) => {
      setActiveCity(value);
      setIsDropdownOpen(false);
    };
  return (
    <>
     <div className="w-full text-white font-quicksand bg-neutral-900 !z-[9999]">
      <div className="lg:max-w-[1300px] flex items-center justify-between py-2 mx-auto px-5">
        <div className="flex gap-x-5 items-center">
       
        <Link href="mailto:freshconindia@gmail.com" className="flex items-center gap-1 active:text-gray-600"  >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-amber-400" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <div className="ml-1 text-[14px] flex-col">
            <div>freshconindia@gmail.com</div>
          </div>
        </Link>
        </div>

        <div className="flex gap-x-2.5 items-center">
          <div className="flex gap-3">
       <Link href="https://www.instagram.com/freshconindia/?hl=en" target="_blank" rel="noopener noreferrer"  >
      <svg className="w-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="50" cy="50" r="50" fill="#fbbf24" />
        <path
          d="M52.57 25C55.3825 25.0075 56.81 25.0225 58.0425 25.0575L58.5275 25.075C59.0875 25.095 59.64 25.12 60.3075 25.15C62.9675 25.275 64.7825 25.695 66.375 26.3125C68.025 26.9475 69.415 27.8075 70.805 29.195C72.0762 30.4447 73.0599 31.9565 73.6875 33.625C74.305 35.2175 74.725 37.0325 74.85 39.695C74.88 40.36 74.905 40.9125 74.925 41.475L74.94 41.96C74.9775 43.19 74.9925 44.6175 74.9975 47.43L75 49.295V52.57C75.0061 54.3935 74.987 56.217 74.9425 58.04L74.9275 58.525C74.9075 59.0875 74.8825 59.64 74.8525 60.305C74.7275 62.9675 74.3025 64.78 73.6875 66.375C73.0617 68.0444 72.0778 69.5565 70.805 70.805C69.5549 72.0758 68.0433 73.0594 66.375 73.6875C64.7825 74.305 62.9675 74.725 60.3075 74.85C59.7143 74.8779 59.1209 74.9029 58.5275 74.925L58.0425 74.94C56.81 74.975 55.3825 74.9925 52.57 74.9975L50.705 75H47.4325C45.6081 75.0063 43.7838 74.9871 41.96 74.9425L41.475 74.9275C40.8815 74.905 40.2882 74.8792 39.695 74.85C37.035 74.725 35.22 74.305 33.625 73.6875C31.9567 73.0609 30.4455 72.0771 29.1975 70.805C27.9251 69.5557 26.9405 68.0439 26.3125 66.375C25.695 64.7825 25.275 62.9675 25.15 60.305C25.1221 59.7118 25.0971 59.1185 25.075 58.525L25.0625 58.04C25.0164 56.217 24.9956 54.3935 25 52.57V47.43C24.993 45.6065 25.0113 43.783 25.055 41.96L25.0725 41.475C25.0925 40.9125 25.1175 40.36 25.1475 39.695C25.2725 37.0325 25.6925 35.22 26.31 33.625C26.9378 31.9548 27.9243 30.4426 29.2 29.195C30.4477 27.9237 31.9578 26.94 33.625 26.3125C35.22 25.695 37.0325 25.275 39.695 25.15C40.36 25.12 40.915 25.095 41.475 25.075L41.96 25.06C43.783 25.0156 45.6065 24.9964 47.43 25.0025L52.57 25ZM50 37.5C46.6848 37.5 43.5053 38.817 41.1611 41.1612C38.8169 43.5054 37.5 46.6848 37.5 50C37.5 53.3152 38.8169 56.4946 41.1611 58.8388C43.5053 61.183 46.6848 62.5 50 62.5C53.3152 62.5 56.4946 61.183 58.8388 58.8388C61.183 56.4946 62.5 53.3152 62.5 50C62.5 46.6848 61.183 43.5054 58.8388 41.1612C56.4946 38.817 53.3152 37.5 50 37.5ZM50 42.5C50.9849 42.4998 51.9602 42.6937 52.8702 43.0704C53.7802 43.4472 54.6071 43.9995 55.3036 44.6958C56.0002 45.3921 56.5528 46.2188 56.9298 47.1287C57.3069 48.0386 57.5011 49.0138 57.5012 49.9988C57.5014 50.9837 57.3076 51.959 56.9308 52.869C56.554 53.779 56.0017 54.6059 55.3054 55.3024C54.6091 55.999 53.7824 56.5516 52.8725 56.9286C51.9626 57.3057 50.9874 57.4998 50.0025 57.5C48.0134 57.5 46.1057 56.7098 44.6992 55.3033C43.2927 53.8968 42.5025 51.9891 42.5025 50C42.5025 48.0109 43.2927 46.1032 44.6992 44.6967C46.1057 43.2902 48.0134 42.5 50.0025 42.5M63.1275 33.75C62.2987 33.75 61.5038 34.0792 60.9178 34.6653C60.3317 35.2513 60.0025 36.0462 60.0025 36.875C60.0025 37.7038 60.3317 38.4987 60.9178 39.0847C61.5038 39.6708 62.2987 40 63.1275 40C63.9563 40 64.7511 39.6708 65.3372 39.0847C65.9232 38.4987 66.2525 37.7038 66.2525 36.875C66.2525 36.0462 65.9232 35.2513 65.3372 34.6653C64.7511 34.0792 63.9563 33.75 63.1275 33.75Z"
          fill="white"
         />
      </svg>
    </Link>
    <Link href="https://www.facebook.com/freshconindia" target="_blank" rel="noopener noreferrer" >
      <svg className="w-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="50" cy="50" r="50" fill="#fbbf24" />
        <path d="M79.1668 50C79.1668 33.9 66.1002 20.8334 50.0002 20.8334C33.9002 20.8334 20.8335 33.9 20.8335 50C20.8335 64.1167 30.8668 75.8709 44.1668 78.5834V58.75H38.3335V50H44.1668V42.7084C44.1668 37.0792 48.746 32.5 54.3752 32.5H61.6668V41.25H55.8335C54.2293 41.25 52.9168 42.5625 52.9168 44.1667V50H61.6668V58.75H52.9168V79.0209C67.646 77.5625 79.1668 65.1375 79.1668 50Z" fill="white" />
      </svg>
    </Link>
  </div>
</div>
      </div>
    </div>
        {/* for lg  */}
    {/* <div id="header" className="bg-white sticky left-0 right-0 top-0 overflow-hidden py-2 shadow-md transition-all duration-100  hidden lg:block font-quicksand !z-[9999999]">
            <div className="lg:max-w-[1300px] px-3 mx-auto flex flex-wrap h-fit flex-col md:flex-row items-center w-full">
                <Link href="/" aria-label="Home Page">
                    <Image className='w-[90px]' src="/images/logo.png"  width={90}  height={90}  />
                </Link>
                <nav className="md:ml-auto flex text-black flex-wrap  items-center text-[15px] justify-center font-medium">
                    <Link href="/" className="mr-2 hover:bg-yellow-400/20 rounded-full py-1 px-3 uppercase">Home</Link>
                    <Link href="/about" className="mr-2 hover:bg-yellow-400/20 py-1 rounded-full px-3 uppercase">About</Link>
 
                    <Link href="/faqs" className="mr-8 hover:bg-yellow-400/20 py-1 rounded-full px-3 uppercase">FAQ</Link>
                </nav>
                <Link href="/contact-us" class="rounded-full px-5 py-2.5 overflow-hidden group bg-[#ffcd01] relative hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300"><span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span><span class="relative">Contact Us</span></Link>
            </div>
    </div> */}

<header id="header" className={`bg-white sticky top-0 shadow-md  left-0 right-0 w-full z-40 py-2 transition-all duration-100 font-manrope hidden lg:block`}>
        <div className="px-3 mx-auto lg:max-w-[1300px] flex flex-wrap h-fit  flex-col md:flex-row items-center w-full">
        <Link href="/" aria-label="Home Page">
            <Image className='w-[90px]' src="/images/logo.png" alt='Freshcon'  width={90}  height={90}  />
                </Link>
          <nav className="md:ml-auto flex text-black items-center text-sm  justify-center font-medium">
                    <Link href="/" className="mr-2 hover:bg-yellow-400/20 rounded-full py-1 px-3 uppercase">Home</Link>
                    <Link href="/about" className="mr-2 hover:bg-yellow-400/20 py-1 rounded-full px-3 uppercase">About</Link>
                    <div className="group">
              <div className="mr-2 group-hover:bg-yellow-400/20 cursor-pointer flex items-center gap-1 rounded-full py-1 px-3 uppercase relative">
              <p>Products</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-600"><path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" /></svg>
              </div>
              <div className="w-full z-30 top-[50px]  rounded-lg absolute bg-white p-4 lg:max-w-[210px] transition-opacity duration-600 ease-in-out opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                <div className="grid grid-cols-1">
                  {/* property */}
                  <ul>
                  <Link href="/products/pre-cooked-kabuli-chana">
                      <p className="text-gray-600 text-sm hover:text-amber-500 hover:font-semibold mt-2">
                      Pre-cooked Kabuli Chana
                      </p>
                    </Link>
                    <Link href="/products/pre-cooked-rajma" className="pt-4">
                      <p className="text-gray-600 text-sm hover:text-amber-500 hover:font-semibold mt-2">
                      Pre-cooked Rajma
                      </p>
                    </Link>
                    <Link href="/products/pre-cooked-kala-chana" className="pt-4">
                      <p className="text-gray-600 text-sm hover:text-amber-500 hover:font-semibold mt-2">
                      Pre-cooked Kala Chana
                      </p>
                    </Link>
                    <Link href="/products/pre-cooked-sweet-corn" className="pt-4">
                      <p className="text-gray-600 text-sm hover:text-amber-500 hover:font-semibold mt-2">
                      Pre-cooked Sweet Corn
                      </p>
                    </Link>
                    <Link href="/products/frozen-shredded-coconut" className="pt-4">
                      <p className="text-gray-600 text-sm hover:text-amber-500 hover:font-semibold mt-2">
                     Frozen Shredded Coconut
                      </p>
                    </Link>
                  </ul>

                </div>
              </div>
            </div>
            <Link href="/faqs" className="mr-8 hover:bg-yellow-400/20 py-1 rounded-full px-3 uppercase">FAQ</Link>

          </nav>
          <Link href="/contact-us" className="rounded-full px-5 py-2.5 overflow-hidden group bg-[#ffcd01] relative hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-amber-400 transition-all ease-out duration-300"><span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span><span className="relative">Contact Us</span></Link>

        </div>

      </header>

 {/* for mobile  */}
 {/* <header className="z-[9999] text-gray-900 fixed left-0 right-0 bg-white pt-1 top-0 body-font block lg:hidden">
        <div className="lg:max-w-[1300px] w-full mx-auto flex px-5 py-1 lg:py-4 items-center justify-between flex-row">
          <Link href="/" className="flex title-font text-lg items-center text-amber-500  font-bold">
          <Image src="/images/logo.png" width={60} height={60} />
          </Link>
          <div className="flex gap-4">
          <div className="w-full relative h-fit">
              <button onClick={() => setIsDropdownOpen(true)} className={`${isDropdownOpen ? 'bg-gray-200' : ''} text-[13px] font-medium flex justify-center gap-x-2 items-center border border-gray-200 rounded-full py-1.5 px-2.5 text-gray-900`}>
                Products
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-3"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/></svg>
              </button>
              {isDropdownOpen ? (
                <div className="fixed inset-0 bg-black/0 w-full h-screen" onClick={() => setIsDropdownOpen(false)}></div>
              ) : (
                <></>
              )}
              {isDropdownOpen ? (
               <div className="px-2 h-fit absolute left-0 right-0 w-full z-50 bg-white border shadow rounded-lg">
      
               <p className="w-full">
                 <Link href={'/products/pre-cooked-kabuli-chana'} className="hover:bg-gray-100 text-left rounded-lg py-1.5 px-2 w-full">
                   Pre-cooked Kabuli Chana
                 </Link>
               </p>
               <p className="w-full">
                 <Link href={'/products/pre-cooked-rajma'} className="hover:bg-gray-100 text-left rounded-lg py-1.5 px-2 w-full">
                   Pre-cooked Rajma
                 </Link>
               </p>
               <p className="w-full">
                 <Link href={'/products/pre-cooked-kala-chana'} className="hover:bg-gray-100 text-left rounded-lg py-1.5 px-2 w-full">
                   Pre-cooked Kala Chana
                 </Link>
               </p>
               <p className="w-full">
                 <Link href={'/products/pre-cooked-sweet-corn'} className="hover:bg-gray-100 text-left rounded-lg py-1.5 px-2 w-full">
                   Pre Cooked Sweet Corn
                 </Link>
               </p>
             </div>
             
              ) : (
                <></>
              )}
            </div>
            <button className="lg:hidden bg-theme1 py-0.5 px-1.5 rounded-lg" onClick={() => setIsOverlayOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/></svg></button>
          </div>
        </div>
 

        <div className={`w-fit`}>
          <div className={`bg-black/40 w-full z-20 h-screen absolute inset-0 ${isOverlayOpen ? '' : 'hidden'}`} onClick={() => setIsOverlayOpen(false)}></div>
          <div className={`real h-screen bottom-0 top-0 absolute right-0 ${isOverlayOpen ? 'translate-x-0' : 'translate-x-80'} duration-300 transition-all top-0 bottom-0 w-80 z-30 bg-white/85 backdrop-blur-sm`}>
          
            <div className="flex flex-col w-full p-4 list-none text-properties">
           
              <li className="flex justify-between items-center border-b border-b-gray-400 pb-5">
              <Link href="/" className="flex title-font text-lg items-center text-amber-500  font-bold">
                   <Image src="/images/logo.png" className='w-24'  width={100}  height={100}  />
              </Link>
                <button onClick={() => setIsOverlayOpen(false)} className="flex title-font items-center bg-theme1/20 p-2 rounded-lg text-gray-900 font-bold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg></button>
              </li>
              <li className="mt-3">
                <Link className="flex items-center px-2 mt-5 mr-2" href="/">
                  <span className="ml-3 mt-1 text-lg font-medium capitalize">Home</span>
                </Link>
              </li>
              <li className="mt-3">
                <Link className="flex items-center px-2 mt-5 mr-2" href="/about">
                  <span className="ml-3 mt-1 text-lg font-medium capitalize">About Us</span>
                </Link>
              </li>
              <li className="mt-3">
                <Link className="flex items-center px-2 mt-5 mr-2" href="">
                  <span className="ml-3 mt-1 text-lg font-medium capitalize">Products</span>
                </Link>
              </li>
              <li className="mt-3">
                <Link className="flex items-center px-2 mt-5 mr-2" href="">
                  <span className="ml-3 mt-1 text-lg font-medium capitalize">FAQ</span>
                </Link>
              </li>
              <li className="mt-3">
                <Link className="flex items-center  mt-5  bg-theme1 py-2 px-5 w-fit rounded-xl" href="">
                  <span className="text-lg text-white font-medium capitalize">Contact Us</span>
                </Link>
              </li>
            </div>
          </div>
        </div>

      </header> */}

<header className="z-[9999] text-gray-900 fixed left-0 right-0 shadow-md bg-white pt-1 top-0 body-font block lg:hidden">
  <div className="lg:max-w-[1300px] w-full mx-auto flex px-5 py-1 lg:py-4 items-center justify-between flex-row">
    <Link href="/" className="flex title-font text-lg items-center text-amber-500  font-bold">
      <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/logo.png" width={60} height={60} />
    </Link>
    <div className="flex gap-4">
      <div className="w-full relative h-fit">
        <button
          onClick={() => setIsDropdownOpen(true)}
          className={`${isDropdownOpen ? 'bg-gray-200' : ''} text-[13px] font-medium flex justify-center gap-x-2 items-center border border-gray-200 rounded-full py-1.5 px-2.5 text-gray-900`}
        >
          Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="size-3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {isDropdownOpen ? (
          <div
            className="fixed inset-0 bg-black/0 w-full h-screen"
            onClick={() => setIsDropdownOpen(false)}
          ></div>
        ) : null}
        {isDropdownOpen ? (
          <div className="fixed right-0 left-0 w-screen h-auto px-2 py-2 mt-1.5 z-50 bg-white border shadow rounded-b-lg">
            <p className="w-full">
              <Link
                href={'/products/pre-cooked-kabuli-chana'}
                className="hover:bg-gray-100 text-left rounded-lg py-1.5 px-2 w-full block"
              >
                Pre-cooked Kabuli Chana
              </Link>
            </p>
            <p className="w-full">
              <Link
                href={'/products/pre-cooked-rajma'}
                className="hover:bg-gray-100 text-left rounded-lg py-1.5 px-2 w-full block"
              >
                Pre-cooked Rajma
              </Link>
            </p>
            <p className="w-full">
              <Link
                href={'/products/pre-cooked-kala-chana'}
                className="hover:bg-gray-100 text-left rounded-lg py-1.5 px-2 w-full block"
              >
                Pre-cooked Kala Chana
              </Link>
            </p>
            <p className="w-full">
              <Link
                href={'/products/pre-cooked-sweet-corn'}
                className="hover:bg-gray-100 text-left rounded-lg py-1.5 px-2 w-full block"
              >
                Pre Cooked Sweet Corn
              </Link>
            </p>
            <p className="w-full">
              <Link
                href={'/products/frozen-shredded-coconut'}
                className="hover:bg-gray-100 text-left rounded-lg py-1.5 px-2 w-full block"
              >
                Frozen Shredded Coconut
              </Link>
            </p>
          </div>
        ) : null}
      </div>
      <button
        className="lg:hidden bg-theme1 py-0.5 px-1.5 rounded-lg"
        onClick={() => setIsOverlayOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
      </button>
    </div>
  </div>

  <div className={`w-fit`}>
    <div
      className={`bg-black/40 w-full z-20 h-screen absolute inset-0 ${isOverlayOpen ? '' : 'hidden'}`}
      onClick={() => setIsOverlayOpen(false)}
    ></div>
    <div
      className={`real h-screen bottom-0 top-0 absolute right-0 ${isOverlayOpen ? 'translate-x-0' : 'translate-x-80'} duration-300 transition-all top-0 bottom-0 w-80 z-30 bg-white/85 backdrop-blur-sm`}
    >
      <div className="flex flex-col w-full p-4 list-none text-properties">
        <li className="flex justify-between items-center border-b border-b-gray-400 pb-5">
          <Link href="/" className="flex title-font text-lg items-center text-amber-500  font-bold">
            <Image src="https://cl85-next.s3.ap-south-1.amazonaws.com/home/logo.png" className="w-24" width={100} height={100} />
          </Link>
          <button
            onClick={() => setIsOverlayOpen(false)}
            className="flex title-font items-center bg-theme1/20 p-2 rounded-lg text-gray-900 font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </li>
        <li className="mt-3">
          <Link className="flex items-center px-2 mt-5 mr-2" href="/">
            <span className="ml-3 mt-1 text-lg font-medium capitalize">Home</span>
          </Link>
        </li>
        <li className="mt-3">
          <Link className="flex items-center px-2 mt-5 mr-2" href="/about">
            <span className="ml-3 mt-1 text-lg font-medium capitalize">About Us</span>
          </Link>
        </li>

        <li className="mt-3">
          <Link className="flex items-center px-2 mt-5 mr-2" href="/faqs">
            <span className="ml-3 mt-1 text-lg font-medium capitalize">FAQ</span>
          </Link>
        </li>
        <li className="mt-3">
          <Link className="flex items-center mt-5 bg-theme1 py-2 px-5 w-fit rounded-xl" href="/contact-us">
            <span className="text-lg text-white font-medium capitalize">Contact Us</span>
          </Link>
        </li>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Header