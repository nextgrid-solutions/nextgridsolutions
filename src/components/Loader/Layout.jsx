// "use client";

// import React, { useEffect } from "react";
// import { useLoader } from "./LoaderProvider";
// import Loader from "./Loader";

// export default function Layout({ children }) {
//   const { loading, setLoading } = useLoader();

//   useEffect(() => {
//     // When page mounts, show loader sliding up
//     setLoading(true);

//     // Simulate page loading delay (replace with your real logic)
//     const timer = setTimeout(() => {
//       // After loading done, slide loader down to reveal page
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [setLoading]);

//   return (
//     <>
//       <Loader />
//       <main style={{ opacity: loading ? 0 : 1, transition: "opacity 0.3s ease" }}>
//         {children}
//       </main>
//     </>
//   );
// }
