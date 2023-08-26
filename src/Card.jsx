import { FaCalendarAlt, FaComments, FaLayerGroup, FaLink, FaNotesMedical } from "react-icons/fa";
import image from '../src/assets/nazmul.jpg';
import './Card.css';

const Card = ({ item }) => {
    function showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal();
        }
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.close();
        }
    }



        return (
            <>






























                {/* card section start */}
                <div className="px-2">
                    <div className="card card-compact w-[384px] bg-base-100 shadow-xl my-4">
                        <div className="card-body">
                            {/* card top start */}
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <img className='logoImage mr-2' src={image} alt="image" />
                                    <h2 className='text-lg font-semibold'>Client Name</h2>
                                </div>
                                <div className='flex items-center'>
                                    <img className='logoImage mr-2' src={image} alt="image" />
                                    <h2 className='text-lg font-semibold'>{item.name}</h2>
                                </div>
                            </div>
                            {/* card top end */}
                            {/* card-middle start */}
                            <div className='flex justify-between mt-4'>
                                <div className='flex items-center'>
                                    <FaLayerGroup></FaLayerGroup>
                                    <p className='ml-2'>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                <div>
                                    <button className='flex items-center p-1 bg-gray-200'><FaNotesMedical className='text-xl'></FaNotesMedical><p className='ml-2'>1/2</p></button>
                                </div>
                            </div>
                            {/* card middle end */}
                            {/* card bottom start */}
                            <div className='flex justify-between mt-4'>
                                <img className='logoImage' src={image} alt="" />
                                <img className='logoImage' src={image} alt="" />
                                <div>
                                    <p className='rating bg-slate-200 font-bold items-center justify-center'>12+</p>
                                </div>
                                <div className='flex items-center'>
                                    <FaComments className='text-xl'></FaComments>
                                    <p className='ml-1 font-semibold'>15</p>
                                </div>
                                <div className='flex items-center'>
                                    {/* modal start */}

                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <form method="dialog" className="modal-box">
                                            {/* modal content start */}
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Press ESC key or click the button below to close</p>
                                            <p className="py-4">Press ESC key or click the button below to close</p>
                                            <p className="py-4">Press ESC key or click the button below to close</p>
                                            <p className="py-4">Press ESC key or click the button below to close</p>
                                            <p className="py-4">Press ESC key or click the button below to close</p>
                                            <button></button>
                                            {/* modal content end */}

                                            <div className="modal-action">
                                                <button className="btn" onClick={() => closeModal('my_modal_5')}>Close</button>
                                                <button>submit</button>
                                            </div>
                                        </form>
                                    </dialog>
                                    {/* modal end */}

                                    <FaLink onClick={() => showModal('my_modal_5')}></FaLink>
                                    <p className='ml-1 font-semibold'>25</p>
                                </div>
                                <div className='flex items-center'>
                                    <FaCalendarAlt></FaCalendarAlt>
                                    <p className='ml-1 font-semibold'>30-12-2022</p>
                                </div>
                            </div>
                            {/* card bottom end */}
                        </div>
                    </div>
                </div>
                {/* card section end */}


            </>
        );
    };

    export default Card;