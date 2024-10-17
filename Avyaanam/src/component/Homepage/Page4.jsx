import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const Card = ({ emoji, image, hueA, hueB }) => {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="flex items-center justify-center w-[75%] relative pt-5 overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="absolute inset-0" style={{ background }} />
      <motion.div
        className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[300px] h-[430px] text-[164px] transform-origin-[10%_60%]"
        variants={cardVariants}
      >
        <img src={image} alt="" className="w-32 h-32 mb-4" />
        <div className="text-4xl">{emoji}</div>
      </motion.div>
    </motion.div>
  );
};

const food = [
  {
    image: "https://images.unsplash.com/photo-1721332153289-0c46dc38981b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dHJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    hueA: 340,
    hueB: 10,
    title: "Tomato",
    description: "A red fruit, rich in vitamins lorme hj ujbsdjkbvd Use these payment buttons for your product checkout or NFT minting landing page including MetaMask, Opera, Bitcoin, Ethereum, Paypal, Visa, Mastercard, and American Express. jjjjkbh.",
  },
  {
    image: "path/to/orange.png",
    hueA: 30,
    hueB: 40,
    title: "Orange",
    description: "A citrus fruit, good for your immune system.",
  },
  {
    image: "path/to/lemon.png",
    hueA: 60,
    hueB: 90,
    title: "Lemon",
    description: "Sour and zesty, great for drinks.",
  },
  {
    image: "path/to/pear.png",
    hueA: 80,
    hueB: 120,
    title: "Pear",
    description: "Sweet and juicy, high in fiber.",
  },
];

const App = () => {
  return (
    <div className="flex flex-col w-full mx-auto pb-[100px] mt-[100px]">
      {food.map(({ emoji, image, hueA, hueB, title, description }, index) => (
        <div className="flex w-full mb-8 items-center" key={index}>
          {/* Heading and Description for Right Side Card */}
          {index % 2 === 0 ? (
            <div className="flex-1 flex items-center justify-center pr-4">
              <div className="bg-white p-10 rounded shadow-md w-full">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-xl font-light">{description}</p>
              </div>
            </div>
          ) : null}

          {/* Card Section */}
          <div className="flex-1 flex justify-center">
            <Card image={image} hueA={hueA} hueB={hueB} emoji={emoji} />
          </div>

          {/* Heading and Description for Left Side Card */}
          {index % 2 !== 0 ? (
            <div className="flex-1 flex items-center justify-center pl-4">
              <div className="bg-white p-4 rounded shadow-md w-full">
                <h2 className="text-2xl px-10 font-bold">{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default App;
