import { FaCheck } from 'react-icons/fa6';
import Button from '../button';
import { pricingDatas } from '../../constants';
import type { itemProps } from '../../types';

const Pricings = () => {
  return (
    <div id="pricing" className='py-50 px-5 w-screen min-h-dvh h-auto relative'>
      <h1 className='text-left md:text-center text-[#2A2E45] text-4xl md:text-[2.875em] font-inter-extrabold'>No Pockets will be Hurt in the Process!</h1>
      <p className='text-[#585F81] text-left md:text-center font-inter-regular text-lg md:text-xl'>We have Planned Affordable ERP Solutions that are Designed to Grow Your Business Without Breaking the Bank.</p>
      <div className='w-full h-auto flex items-start justify-center flex-wrap gap-40 md:gap-2 mt-30'>
        {pricingDatas.map((item: itemProps, index: number) =>
          <div className="w-[426px] h-[145dvh] relative rounded-t-xl flex flex-col items-center bg-white">
            {
            index === 2 &&
              <div className='absolute -top-7 border-1 border-[#D1DFF2] px-5 py-2.5 rounded-[6px] shadow-(--proshadow) flex items-center justify-center gap-2 bg-white'>
                <p className='font-inter-semibold text-base text-[#585F81]'>Everything in</p>
                <p className='font-inter-semibold text-base text-[#458DF6]'>PRO +</p>
              </div>
            }
            <div style={{ backgroundColor: `#${item.bg}` }} className="w-full flex flex-col items-center justify-center gap-3 py-5">
              <img src={item.img} alt={item.tier} />
              <h3 style={{ color: `#${item.color}` }} className="text-center text-2xl font-inter-bold">{item.tier}</h3>
              <h1 className="text-[#2A2E45] text-4xl font-inter-bold">{item.price}</h1>
              <p className="text-[#ADB2CC] text-base font-inter-semibold">{item.desc}</p>
            </div>

            <ul className="w-5/6 flex flex-col items-start gap-8 mt-10 flex-1 overflow-auto">
              {item.features.map(featureList => (
                <li className="flex items-center gap-5">
                  <FaCheck color="#16BE6A" />
                  <p className="text-[#2A2E45] text-left text-base font-inter-medium">{featureList}</p>
                </li>
              ))}
            </ul>

            <div className="w-5/6 mb-5">
              <Button title="Select Plan" containerClass={`w-full border-2 border-[#2A2E45} !py-4 ${index === 1 ? "bg-[#2A2E45] shadow-custom-card" : "bg-[#FFF]"}`} color={index === 1 ? "text-[#FCFCFD]" : "text-[#2A2E45]"} radius="rounded-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Pricings