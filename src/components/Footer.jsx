// import React, { useEffect, useState } from 'react'

// const Footer = ({ footerAPI: { titles, links } }) => {
//   const [Year, setYear] = useState();
//   useEffect(() => {
//       const getYear = () => setYear(new Date().getFullYear());
//       getYear();
//   }, []);
//   return (
//    <>
//       <footer className='bg-theme pt-7 pb-5'>
//         <div className='nike-container text-slate-200'>
//           <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>
//             {titles.map((val, i) => (
//               <div key={i} className="grid items-center">
//                 <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{val.title}</h1>
//               </div>
//             ))}
//             {links.map((list, i) => (
//               <ul key={i} className="grid items-center gap-1">
//                 {list.map((link, i) => (
//                   <li key={i} className="text-sm sm:text-xs">{link.link}</li>
//                 ))}
//               </ul>
//             ))}
//           </div>
//           <div className='mt-5 text-center'>
//             <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights <span className='font-semibold'>JSSTACK DEVELOPERS {Year}</span></p>
//           </div>
//         </div>
//       </footer>
//    </>
//   )
// }

// export default Footer


import React from 'react'
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'
import { footerLinks, socialMedia } from '../data/data'
import { useNavigate } from 'react-router-dom'
// import {twitter} from '../assets/twitter.svg'
// import {twitter} from '../assets/twitter.svg'



function Footer() {
  
  return (
       <footer className=' max-container'>
        <div className=' flex justify-between items-start gap-20 flex-wrap max-lg:flex col'>
          <div className=' flex flex-col items-start'>
             <a href="/">
              <img 
              src={logo}
               alt=""
               className=' m-0 w-[50px] h-[18px] mt-5 ml-5'
                />
             </a>
             <p className=' text-white mt-4 text-base leading-7 font-normal text-[12px] sm:max-w-sm '>
              Get your trady shoes in nike store. to be stylish buy from nike store. <br />
              get your dream shoes with your perfect shoe fit.
             </p>
              <div className=' flex items-center gap-5 mt-8'>
                {socialMedia.map((icon)=>(
                   <div className=' ml-3'
                   key={icon.alt}>
                    <img src={icon.src} alt={icon.alt} width={24} height={24} />
                   </div>

                ))}
              </div>

          </div>
{/* //footerlink */}
          <div className='  mr-2 ml-2  mt-2 flex flex-1 justify-between lg:gap=20 gap-10 flex-wrap'>
              {footerLinks.map((section)=>(
                 <div key={section.title}>
                  <h4 className=' text-white font-montserrat text-2xl leading-normal font-medium
                                    mb-6 '>
                    {section.title}
                  </h4>
                    <ul>
                      {section.links.map((link)=>(
                          <li key={link.name}
                            className=' text-white mt-2 text-base leading-normal hover:text-orange-500'>
                            <a href={link.link}>{link.name}</a>
                          </li>
                      ))}
                    </ul>
                 </div>
              ))}
          </div>

        </div>
       </footer>
  )
}

export default Footer