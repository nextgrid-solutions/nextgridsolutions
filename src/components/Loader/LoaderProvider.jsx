// -----hour glass code;-----

'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import HourglassLoader from './Loader'

export default function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timeout)
  }, [pathname])

  // Disable scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <>
      {loading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1119999,
            backgroundColor: 'rgba(0, 0, 0, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <HourglassLoader />
        </div>
      )}
      <div style={{ opacity: loading ? 0.2 : 1, transition: 'opacity 0.3s ease-in-out' }}>
        {children}
      </div>
    </>
  )
}

// -----hour glass code;-----


/////  black screen code ----

// 'use client'

// import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function LoaderProvider({ children }) {
//   const pathname = usePathname()
//   const [showTransition, setShowTransition] = useState(true)

//   useEffect(() => {
//     setShowTransition(true)
//     const timeout = setTimeout(() => {
//       setShowTransition(false)
//     }, 1600) // match total animation duration

//     return () => clearTimeout(timeout)
//   }, [pathname])

//   // Prevent scroll during transition
//   useEffect(() => {
//     if (showTransition) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = ''
//     }
//   }, [showTransition])

//   return (
//     <>
//       <AnimatePresence>
//         {showTransition && (
//           <motion.div
//             key="loader"
//             initial={{ y: '100%' }}    // Comes from bottom
//             animate={{ y: 0 }}         // Slides up
//             exit={{ y: '100%' }}       // Then slides back down
//             transition={{ duration: 0.8, ease: 'easeInOut' }}
//             style={{
//               position: 'fixed',
//               inset: 0,
//               backgroundColor: 'black',
//               zIndex: 9999,
//             }}
//           />
//         )}
//       </AnimatePresence>
//       <div style={{ visibility: showTransition ? 'hidden' : 'visible' }}>
//         {children}
//       </div>
//     </>
//   )
// }

// ------------black screen code---------

// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { usePathname } from 'next/navigation'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function LoaderProvider({ children }) {
//   const pathname = usePathname()
//   const isFirstLoad = useRef(true)
//   const [showLoader, setShowLoader] = useState(true)
//   const [isHourglass, setIsHourglass] = useState(true)

//   // ⏳ First load: hourglass
//   useEffect(() => {
//     if (isFirstLoad.current) {
//       setIsHourglass(true)
//       setShowLoader(true)
//       const timer = setTimeout(() => {
//         setShowLoader(false)
//         isFirstLoad.current = false
//       }, 2000)
//       return () => clearTimeout(timer)
//     }
//   }, [])

//   // 🔁 Subsequent route change: black screen
//   useEffect(() => {
//     if (!isFirstLoad.current) {
//       setIsHourglass(false)
//       setShowLoader(true)
//       const timer = setTimeout(() => {
//         setShowLoader(false)
//       }, 1200)
//       return () => clearTimeout(timer)
//     }
//   }, [pathname])

//   // 🔒 Prevent scroll while loading
//   useEffect(() => {
//     document.body.style.overflow = showLoader ? 'hidden' : ''
//     return () => {
//       document.body.style.overflow = ''
//     }
//   }, [showLoader])

//   return (
//     <>
//       <AnimatePresence mode="wait">
//         {showLoader && (
//           isHourglass ? (
//             <motion.div
//               key="hourglass"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               style={{
//                 position: 'fixed',
//                 inset: 0,
//                 backgroundColor: '#473c3c',
//                 zIndex: 9999,
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//             >
//               {/* Hourglass loader */}
//               <div className="hourglassBackground">
//                 <div className="hourglassContainer">
//                   <div className="hourglassCurves"></div>
//                   <div className="hourglassCapTop"></div>
//                   <div className="hourglassGlassTop"></div>
//                   <div className="hourglassSand"></div>
//                   <div className="hourglassSandStream"></div>
//                   <div className="hourglassCapBottom"></div>
//                   <div className="hourglassGlass"></div>
//                 </div>
//               </div>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="black-loader"
//               initial={{ y: '100%' }}
//               animate={{ y: 0 }}
//               exit={{ y: '100%' }}
//               transition={{ duration: 0.8, ease: 'easeInOut' }}
//               style={{
//                 position: 'fixed',
//                 inset: 0,
//                 backgroundColor: 'black',
//                 zIndex: 9999,
//               }}
//             />
//           )
//         )}
//       </AnimatePresence>

//       {/* Delay rendering content until loader is gone */}
//       <div style={{ visibility: showLoader ? 'hidden' : 'visible' }}>
//         {children}
//       </div>
//     </>
//   )
// }
