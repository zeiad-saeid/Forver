import { assets } from "../assets/assets";

const OurPloicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">

        <div>
            <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="exchange_icon" />
            <p className="font-semibold ">  Easy Exchange Ploicy</p>
            <p className="text-gray-400">we offer hassel free exchange ploicy</p>
        </div>
        <div>
            <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="exchange_icon" />
            <p className="font-semibold "> 7 Days Return Policy</p>
            <p className="text-gray-400">we provide 7 days free return ploicy</p>
        </div>
        <div>
            <img src={assets.support_img} className="w-12 m-auto mb-5" alt="exchange_icon" />
            <p className="font-semibold ">Best Customer Support</p>
            <p className="text-gray-400">we provid 24/7 customer support</p>
        </div>
    </div>
  );
};

export default OurPloicy;
