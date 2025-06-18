import React from 'react';
import { IoClose } from 'react-icons/io5';

interface modalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ContactModal = ({ isOpen, onClose, children }: modalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="w-full h-full fixed top-0 left-0 flex items-center justify-center z-100 bg-linear-to-t from-[#1c1b1b88] to-[#615c5c11] bgblur"
      onClick={onClose}
    >
      <div className='bg-white px-[49px] py-[38px] min-w-[500px] md:w-[620px] min-h-[80%] rounded-[60px] overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        <button className='absolute top-20 right-20 hover:cursor-pointer'>
          <IoClose size={60} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ContactModal;