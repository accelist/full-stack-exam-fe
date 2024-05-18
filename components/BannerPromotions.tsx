// import Link from 'next/link';
// import React, { useState } from 'react';

// interface Promotion {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// const promotions: Promotion[] = [
//   {
//     id: 1,
//     title: 'Promo 1',
//     description: 'Diskon hingga 50% untuk produk tertentu',
//     imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405171125514961.jpg',
//   },
//   {
//     id: 2,
//     title: 'Promo 2',
//     description: 'Gratis ongkir untuk pembelian di atas Rp100.000',
//     imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405100933495889.jpg',
//   },
//   {
//     id: 3,
//     title: 'Promo 3',
//     description: 'Beli 1 gratis 1 untuk produk tertentu',
//     imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
//   },
//   {
//     id: 4,
//     title: 'Promo 4',
//     description: 'Diskon hingga 30% untuk produk tertentu',
//     imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
//   },
//   {
//     id: 5,
//     title: 'Promo 5',
//     description: 'Beli 2 gratis 1 untuk produk tertentu',
//     imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
//   },
//   {
//     id: 6,
//     title: 'Promo 6',
//     description: 'Cashback hingga 20% untuk produk tertentu',
//     imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
//   },
// ];

// const BannerPromotions: React.FC = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   const handleNext = () => {
//     setStartIndex((prevIndex) => {
//       const remainingItems = promotions.length - (prevIndex + 2);
//       const newIndex = prevIndex + 1;
//       return remainingItems >= 0 ? newIndex : prevIndex;
//     });
//   };
  
//   const handlePrev = () => {
//     setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   return (
//     <div className="py-4 px-2">
//       <div className="flex justify-between items-center mb-4 mx-4">
//         <h2 className="text-red-500 text-4xl font-bold ml-8">PROMOTION</h2>
//         <Link href="/promotion" className="text-red-500 text-lg font-medium hover:underline">View All</Link>
//       </div>
//       <div className="relative overflow-hidden">
//         <div className="flex space-x-4 transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${startIndex * 50}%)` }}>
//           {promotions.slice(startIndex, startIndex + 2  ).map((promotion) => (
//             <div key={promotion.id} className="w-[50%]">
//               <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <img
//                   src={promotion.imageUrl}
//                   alt={promotion.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold">{promotion.title}</h3>
//                   <p className="text-sm text-gray-600">{promotion.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {startIndex > 0 && (
//           <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none">
//             &lt;
//           </button>
//         )}
//         {startIndex < promotions.length - 2 && (
//           <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 focus:outline-none">
//             &gt;
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BannerPromotions;

// components/PromotionBanner.js
import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createUseStyles } from 'react-jss';

const promotions = [
  {
    id: 1,
    title: 'Promo 1',
    description: 'Diskon hingga 50% untuk produk tertentu',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405171125514961.jpg',
  },
  {
    id: 2,
    title: 'Promo 2',
    description: 'Gratis ongkir untuk pembelian di atas Rp100.000',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405100933495889.jpg',
  },
  {
    id: 3,
    title: 'Promo 3',
    description: 'Beli 1 gratis 1 untuk produk tertentu',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
  },
  {
    id: 4,
    title: 'Promo 4',
    description: 'Diskon hingga 30% untuk produk tertentu',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
  },
  {
    id: 5,
    title: 'Promo 5',
    description: 'Beli 2 gratis 1 untuk produk tertentu',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
  },
  {
    id: 6,
    title: 'Promo 6',
    description: 'Cashback hingga 20% untuk produk tertentu',
    imageUrl: 'https://cdn.cgv.id/uploads_v2/promotions/2405/PR202405021526585021.jpg',
  },
];

const useStyles = createUseStyles({
  slideEnter: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
  slideEnterActive: {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 500ms, transform 500ms',
  },
  slideExit: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  slideExitActive: {
    opacity: 0,
    transform: 'translateX(-100%)',
    transition: 'opacity 500ms, transform 500ms',
  },
});

const BannerPromotions = () => {
  const classes = useStyles();
  const [currentPromotionIndex, setCurrentPromotionIndex] = useState(0);

  const handlePrev = () => {
    setCurrentPromotionIndex((prevIndex) =>
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentPromotionIndex((prevIndex) =>
      prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 overflow-hidden rounded-lg shadow-lg">
      <div className="relative flex items-center justify-center w-full h-64">
        <button
          className="absolute left-0 z-10 p-2 m-2 text-red-500 bg-black bg-opacity-20 rounded-full hover:bg-opacity-75"
          onClick={handlePrev}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="relative w-full h-full overflow-hidden">
          <TransitionGroup className="h-full">
            <CSSTransition
              key={promotions[currentPromotionIndex].id}
              timeout={500}
              classNames={{
                enter: classes.slideEnter,
                enterActive: classes.slideEnterActive,
                exit: classes.slideExit,
                exitActive: classes.slideExitActive,
              }}
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={promotions[currentPromotionIndex].imageUrl}
                  alt={promotions[currentPromotionIndex].title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                  <h3 className="text-lg font-bold text-white">
                    {promotions[currentPromotionIndex].title}
                  </h3>
                  <p className="text-sm text-white">
                    {promotions[currentPromotionIndex].description}
                  </p>
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <button
          className="absolute right-0 z-10 p-2 m-2 text-red-500 bg-black bg-opacity-20 rounded-full hover:bg-opacity-75"
          onClick={handleNext}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BannerPromotions;
