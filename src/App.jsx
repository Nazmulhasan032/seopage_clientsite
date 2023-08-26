import { FaCalendarAlt, FaComments, FaLayerGroup, FaLink, FaNotesMedical } from "react-icons/fa";
import { useEffect, useState } from 'react';
import './App.css'
import image from '../src/assets/nazmul.jpg'
// import Card from "./Card";

import React from 'react';
import { useForm } from 'react-hook-form';


function App() {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
  };





  // modal function start
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
  // modal function end

  const [incomplete, setIncomplete] = useState([]);
  useEffect(() => {
    fetch('https://server-five-lime-99.vercel.app/incomplete')
      .then(res => res.json())
      .then(data => setIncomplete(data))
  }, [])


  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch('https://server-five-lime-99.vercel.app/incomplete')
      .then(res => res.json())
      .then(data => setTodo(data))
  }, [])


  const [doing, setDoing] = useState([]);
  useEffect(() => {
    fetch('https://server-five-lime-99.vercel.app/incomplete')
      .then(res => res.json())
      .then(data => setDoing(data))
  }, [])


  // const [review, setReview] = useState([]);
  // useEffect(() => {
  //   fetch('review.json')
  //     .then(res => res.json())
  //     .then(data => setReview(data))
  // }, [])


  // const [complete, setComplete] = useState([]);
  // useEffect(() => {
  //   fetch('complete.json')
  //     .then(res => res.json())
  //     .then(data => setComplete(data))
  // }, [])

  // const [overview, setOverview] = useState([]);
  // useEffect(() => {
  //   fetch('overView.json')
  //     .then(res => res.json())
  //     .then(data => setOverview(data))
  // }, [])

  return (
    <>

      <div className='overflow-x-scroll mt-2'>
        <div className='flex'>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-[650px] overflow-y-auto'>
            <div className='flex'>
              <div className='box1'></div>
              <h2 className='font-bold pl-2 text-xl'>Incomplete</h2>
            </div>
            {
              incomplete.map(item => <div key={item._id} className="px-2">
                <div className="card card-compact w-[384px] bg-base-100 shadow-xl my-4">
                  <div className="card-body">
                    {/* card top start */}
                    <div className='flex justify-between'>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image1} alt="image" />
                        <h2 className='text-lg font-semibold'>Client Name</h2>
                      </div>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image2} alt="image" />
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
                          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box">
                            {/* modal content start */}

                            <input className="py-4 pr-36 pl-4 mb-2" type="text" {...register("name", { required: true })} placeholder="Enter Client Name" />
                            <input type="file" {...register("image1", { required: true })} className="mb-2 file-input file-input-bordered w-full max-w-xs" />
                            <input type="file" {...register("image2", { required: true })} className="mb-2 file-input file-input-bordered w-full max-w-xs" />

                            <div className="modal-action">
                              <button className="btn" onClick={() => closeModal('my_modal_5')}>Close</button>
                              <input className="btn" onClick={() => closeModal('my_modal_5')} type="submit" value="Submit" />

                            </div>

                          </form>
                        </dialog>
                        {/* modal end */}
                        {/* modal content end */}

                        <FaLink onClick={() => showModal('my_modal_5')}></FaLink>
                        <p className='ml-1 font-semibold'>{incomplete.length}</p>
                      </div>
                      <div className='flex items-center'>
                        <FaCalendarAlt></FaCalendarAlt>
                        <p className='ml-1 font-semibold'>30-12-2022</p>
                      </div>
                    </div>
                    {/* card bottom end */}
                  </div>
                </div>
              </div>)
            }

          </div>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-[650px] overflow-y-auto'>
            <div className='flex'>
              <div className='box2'></div>
              <h2 className='font-bold pl-2 text-xl'>To Do</h2>
            </div>
            {
              todo.map(item => <div key={item._id} className="px-2">
                <div className="card card-compact w-[384px] bg-base-100 shadow-xl my-4">
                  <div className="card-body">
                    {/* card top start */}
                    <div className='flex justify-between'>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image1} alt="image" />
                        <h2 className='text-lg font-semibold'>Client Name</h2>
                      </div>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image2} alt="image" />
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
                          <div method="dialog" className="modal-box">
                            {/* modal content start */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                              <input className="py-4 pr-36 pl-4 mb-2" type="text" placeholder="Enter Client Name"  {...register("name", { required: true })} />
                              <input type="file" className="mb-2 file-input file-input-bordered w-full max-w-xs"  {...register("image1", { required: true })} />
                              <input type="file" className="mb-2 file-input file-input-bordered w-full max-w-xs" {...register("image2", { required: true })} />

                              <div className="modal-action">
                                <button className="btn" onClick={() => closeModal('my_modal_5')}>Close</button>
                                <input type="Submit" value="Submit" />
                              </div>
                            </form>

                          </div>
                        </dialog>
                        {/* modal end */}

                        <FaLink onClick={() => showModal('my_modal_5')}></FaLink>
                        <p className='ml-1 font-semibold'>{todo.length}</p>
                      </div>
                      <div className='flex items-center'>
                        <FaCalendarAlt></FaCalendarAlt>
                        <p className='ml-1 font-semibold'>30-12-2022</p>
                      </div>
                    </div>
                    {/* card bottom end */}
                  </div>
                </div>
              </div>)
            }

          </div>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-[650px] overflow-y-auto'>
            <div className='flex'>
              <div className='box3'></div>
              <h2 className='font-bold pl-2 text-xl'>Doing</h2>
            </div>
            {
              doing.map(item => <div key={item._id} className="px-2">
                <div className="card card-compact w-[384px] bg-base-100 shadow-xl my-4">
                  <div className="card-body">
                    {/* card top start */}
                    <div className='flex justify-between'>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image1} alt="image" />
                        <h2 className='text-lg font-semibold'>Client Name</h2>
                      </div>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image2} alt="image" />
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
                          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box">
                            {/* modal content start */}

                            <input className="py-4 pr-36 pl-4 mb-2" type="text" {...register("name", { required: true })} placeholder="Enter Client Name" />
                            <input type="file" {...register("image1", { required: true })} className="mb-2 file-input file-input-bordered w-full max-w-xs" />
                            <input type="file" {...register("image2", { required: true })} className="mb-2 file-input file-input-bordered w-full max-w-xs" />

                            <div className="modal-action">
                              <button className="btn" onClick={() => closeModal('my_modal_5')}>Close</button>
                              <input className="btn" onClick={() => closeModal('my_modal_5')} type="submit" value="Submit" />

                            </div>

                          </form>
                        </dialog>
                        {/* modal end */}

                        <FaLink onClick={() => showModal('my_modal_5')}></FaLink>
                        <p className='ml-1 font-semibold'>{doing.length}</p>
                      </div>
                      <div className='flex items-center'>
                        <FaCalendarAlt></FaCalendarAlt>
                        <p className='ml-1 font-semibold'>30-12-2022</p>
                      </div>
                    </div>
                    {/* card bottom end */}
                  </div>
                </div>
              </div>)
            }
          </div>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-[650px] overflow-y-auto'>
            <div className='flex'>
              <div className='box4'></div>
              <h2 className='font-bold pl-2 text-xl'>Under Review</h2>
            </div>
            {
              incomplete.map(item => <div key={item._id} className="px-2">
                <div className="card card-compact w-[384px] bg-base-100 shadow-xl my-4">
                  <div className="card-body">
                    {/* card top start */}
                    <div className='flex justify-between'>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image1} alt="image" />
                        <h2 className='text-lg font-semibold'>Client Name</h2>
                      </div>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image2} alt="image" />
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
                          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box">
                            {/* modal content start */}

                            <input className="py-4 pr-36 pl-4 mb-2" type="text" {...register("name", { required: true })} placeholder="Enter Client Name" />
                            <input type="file" {...register("image1", { required: true })} className="mb-2 file-input file-input-bordered w-full max-w-xs" />
                            <input type="file" {...register("image2", { required: true })} className="mb-2 file-input file-input-bordered w-full max-w-xs" />

                            <div className="modal-action">
                              <button className="btn" onClick={() => closeModal('my_modal_5')}>Close</button>
                              <input className="btn" onClick={() => closeModal('my_modal_5')} type="submit" value="Submit" />

                            </div>

                          </form>
                        </dialog>
                        {/* modal end */}
                        {/* modal content end */}

                        <FaLink onClick={() => showModal('my_modal_5')}></FaLink>
                        <p className='ml-1 font-semibold'>{incomplete.length}</p>
                      </div>
                      <div className='flex items-center'>
                        <FaCalendarAlt></FaCalendarAlt>
                        <p className='ml-1 font-semibold'>30-12-2022</p>
                      </div>
                    </div>
                    {/* card bottom end */}
                  </div>
                </div>
              </div>)
            }

          </div>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-[650px] overflow-y-auto'>
            <div className='flex'>
              <div className='box5'></div>
              <h2 className='font-bold pl-2 text-xl'>Completed</h2>
            </div>
            {
              incomplete.map(item => <div key={item._id} className="px-2">
                <div className="card card-compact w-[384px] bg-base-100 shadow-xl my-4">
                  <div className="card-body">
                    {/* card top start */}
                    <div className='flex justify-between'>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image1} alt="image" />
                        <h2 className='text-lg font-semibold'>Client Name</h2>
                      </div>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image2} alt="image" />
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
                          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box">
                            {/* modal content start */}

                            <input className="py-4 pr-36 pl-4 mb-2" type="text" {...register("name", { required: true })} placeholder="Enter Client Name" />
                            <input type="file" {...register("image1", { required: true })} className="mb-2 file-input file-input-bordered w-full max-w-xs" />
                            <input type="file" {...register("image2", { required: true })} className="mb-2 file-input file-input-bordered w-full max-w-xs" />

                            <div className="modal-action">
                              <button className="btn" onClick={() => closeModal('my_modal_5')}>Close</button>
                              <input className="btn" onClick={() => closeModal('my_modal_5')} type="submit" value="Submit" />

                            </div>

                          </form>
                        </dialog>
                        {/* modal end */}
                        {/* modal content end */}

                        <FaLink onClick={() => showModal('my_modal_5')}></FaLink>
                        <p className='ml-1 font-semibold'>{incomplete.length}</p>
                      </div>
                      <div className='flex items-center'>
                        <FaCalendarAlt></FaCalendarAlt>
                        <p className='ml-1 font-semibold'>30-12-2022</p>
                      </div>
                    </div>
                    {/* card bottom end */}
                  </div>
                </div>
              </div>)
            }
          </div>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-[650px] overflow-y-auto'>
            <div className='flex'>
              <div className='box6'></div>
              <h2 className='font-bold pl-2 text-xl'>Overview</h2>
            </div>
            {
              incomplete.map(item => <div key={item._id} className="px-2">
                <div className="card card-compact w-[384px] bg-base-100 shadow-xl my-4">
                  <div className="card-body">
                    {/* card top start */}
                    <div className='flex justify-between'>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image1} alt="image" />
                        <h2 className='text-lg font-semibold'>Client Name</h2>
                      </div>
                      <div className='flex items-center'>
                        <img className='logoImage mr-2' src={item.image2} alt="image" />
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
                          <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box">
                            {/* modal content start */}

                            <input className="py-4 pr-36 pl-4 mb-2" type="text" {...register("name", { required: true })} placeholder="Enter Client Name" />
                            <input type="file" {...register("image1", { required: true })} className="mb-2 file-input file-input-bordered w-full max-w-xs" />
                            <input type="file" {...register("image2", { required: true })} className="mb-2 file-input file-input-bordered w-full max-w-xs" />

                            <div className="modal-action">
                              <button className="btn" onClick={() => closeModal('my_modal_5')}>Close</button>
                              <input className="btn" onClick={() => closeModal('my_modal_5')} type="submit" value="Submit" />

                            </div>

                          </form>
                        </dialog>
                        {/* modal end */}
                        {/* modal content end */}

                        <FaLink onClick={() => showModal('my_modal_5')}></FaLink>
                        <p className='ml-1 font-semibold'>{incomplete.length}</p>
                      </div>
                      <div className='flex items-center'>
                        <FaCalendarAlt></FaCalendarAlt>
                        <p className='ml-1 font-semibold'>30-12-2022</p>
                      </div>
                    </div>
                    {/* card bottom end */}
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>



















      {/* 
      <div className='overflow-x-scroll mt-8'>
        <div className='flex'>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-screen overflow-y-auto'>
            <h2 className='font-bold ml-8 text-xl'>Incomplete</h2>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-screen overflow-y-auto'>
            <h2 className='font-bold'>To Do</h2>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-screen overflow-y-auto'>
            <h2 className='font-bold'>Doing</h2>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-screen overflow-y-auto'>
            <h2 className='font-bold'>Under Review</h2>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-screen overflow-y-auto'>
            <h2 className='font-bold'>Completed</h2>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div className='w-[415px] bg-slate-100 mx-2 max-h-screen overflow-y-auto'>
            <h2 className='font-bold'>OverView</h2>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div> */}






    </>
  )
}

export default App
