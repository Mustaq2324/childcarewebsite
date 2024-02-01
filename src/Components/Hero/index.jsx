import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full  py-12 flex justify-center flex-col md:flex-row  items-center gap-8  mx-auto bg-[#FFEEDA]">
      <div className="ms-5">
        <h3 className=" mb-4 text-4xl md:text-6xl font-semibold font-[Bitter]">
        Little Steps 
        </h3>
        <h3 className="text-4xl  md:text-6xl font-semibold font-[Bitter]">
        Big Dreams Today
        </h3>
        <p className="text-base md:text-lg w-[450px] text-slate-700 my-4 md:my-6 font-[Rokkitt]">
        Discover a revolutionary approach to childcare tackle common pain points head-on. Unlock a brighter future for your little ones with our proven solutions.
        </p>
        <button className="bg-[#075E56] text-[#FFEEDA] font-medium py-2 px-4 rounded transition-all hover:bg-transparent hover:boder-[#075E56] border-[1px] border-[#075E56] hover:text-[#075E56] active:scale-95">
          Find a Center
        </button>
      
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNoaWxkY2FyZXxlbnwwfHwwfHx8MA%3D%3D    ",

  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1587616211892-f743fcca64f9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw4MTkxMDM5OXx8ZW58MHx8fHx8  "},
  {
    id: 5,
    src: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
//   },
//   {
//     id: 7,
    // src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 8,
//     src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 9,
//     src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 10,
//     src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 11,
//     src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
//   },
//   {
//     id: 12,
//     src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
//   }]
  ]

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="lg:w-[250px]  lg:h-[250px] w-[150px] h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-2 grid-rows-4 h-[450px] lg:h-[510px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;