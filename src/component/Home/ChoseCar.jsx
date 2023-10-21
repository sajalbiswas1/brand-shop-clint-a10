import { AiFillCar } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { FaCarSide } from 'react-icons/fa';

const ChoseCar = () => {
    return (
        <div className='w-10/12 m-auto mt-16'>
            <h1 className="text-3xl font-bold border-l-4 border-red-500 pl-5 mb-8">Why Did You Choose Our Car <br /> Listing Services?</h1>
        <div className='grid lg:grid-cols-2'>
            <div>
                <img src="https://i.ibb.co/0cN80Dk/Toyota-Glanza-060520221539.jpg" alt="" />
            </div>
            <div>
                <p>If you are in the market for a new car, you have probably done your fair share of research to car services. You know what kind of car you want, what features you need? We are here to help you at any time.</p>
            <div className='grid grid-cols-2 border-l-4 border-l-red-500 pl-5 mt-5'>
                <div className='flex gap-3 items-center my-5'>
                    <div>
                    <AiFillCar className='w-10 h-10 text-red-600'></AiFillCar>
                    </div>
                    <div>
                        <h3 className='text-2xl font-extrabold'>500+</h3>
                        <p className='text-sm font-medium text-[#6d6d6d]'>Vehicles Available</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center my-5'>
                    <div>
                    <IoMdContacts className='w-10 h-10 text-red-600'></IoMdContacts>
                    </div>
                    <div>
                        <h3 className='text-2xl font-extrabold'>300+</h3>
                        <p className='text-sm font-medium text-[#6d6d6d]'>Happy Customers</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center my-5'>
                    <div>
                    <MdOutlineSupportAgent className='w-10 h-10 text-red-600'></MdOutlineSupportAgent>
                    </div>
                    <div>
                        <h3 className='text-2xl font-extrabold'>24+</h3>
                        <p className='text-sm font-medium text-[#6d6d6d]'>24/7 Support</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center my-5'>
                    <div>
                    <FaCarSide className='w-10 h-10 text-red-600'></FaCarSide>
                    </div>
                    <div className=''>
                        <h3 className='text-2xl font-extrabold'>125+</h3>
                        <p className='text-sm font-medium text-[#6d6d6d]'>Car Model & Make</p>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
        </div>
    );
};

export default ChoseCar;