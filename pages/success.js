import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export default function Success() {
  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };
  const router = useRouter();

  useEffect(() => {
    stopConfetti();
  }, []);
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" h-screen items-center flex justify-center relative"
    >
      <div className="bg-white rounded-lg w-1/3 font-latoRegular text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-latoBold">
          Thanks for Your Feedback {router.query.name} ✨
        </h1>
        <h3 className="text-2xl  text-purple-500">
          Your perspective is valuable to us, and we take your concerns seriously.
        </h3>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </m.main>
  );
}