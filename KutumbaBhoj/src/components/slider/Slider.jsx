import { useEffect, useState } from "react";
import assets from "../../assets/assets";

const Slider = () => {
  const { Food1, Food2, Food3 } = assets;
  const imgs = [Food1, Food2, Food3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
      setCurrentImg((prevImg) => (prevImg + 1) % imgs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <div className="w-1/2 h-full overflow-hidden relative">
      <div
        className="h-full w-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imgs.map((img, index) => (
          <div
            key={index}
            className="bg-cover bg-center min-w-full h-full"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
        ))}
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-3 bottom-12">
        {imgs.map((_,index) => (
          <div
            key={index}
            className={`${
              currentImg === index ? "bg-[#0D693C]" : "bg-white"
            } size-2 rounded-full`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
