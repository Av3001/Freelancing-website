"use client"
import React, { FormEvent, useState,useEffect } from 'react';
import Modal from 'react-modal';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Button } from '@/components/ui/moving-border';
import axiosServices from '@/utils/axiosUtil';


function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted,setIsMounted]=useState(false);
    
    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted) {
      return null;
  }

  const sendMail = async (email:string, message:string) => {
    try {
      await axiosServices.post(`${process.env.APP_API_URL}/api/mails`, { email, message });
      setMessage('');
      setEmail('');
      setEmailError('');
      setIsModalOpen(true); // Open the success modal
    } catch (error) {
      console.log(error);
    }
  };

  const validateEmail = (inputEmail:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (!message.trim()) {
      setEmailError('');
      alert('Please enter a message');
      return;
    }

    sendMail(email, message);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36  items-center">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="mt-1 mb-6 text-4xl md:text-7xl font-bold bg-clip-text 
            text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
          Contact Us
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto my-2 text-lg text-center">
          Questions or projects? Contact Rust.co now. Expert support for your freelance needs awaits.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            placeholder="Your email address"
            className={`rounded-lg border ${
              emailError ? 'border-red-500' : 'border-neutral-800'
            } focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-400`}
            required
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-400"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>

      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Mail Sent Successfully"
        className="modal-content text-center text-2xl font-bold "
        
        style={{
          overlay:{  
            top:"50%",
            bottom:"50%",
            background:"red",  
            zIndex:10,          
          }
        }}
      >
        <h2>We have received your query!</h2>
        <p>We will get back to you shortly.</p>
        {/* <button onClick={closeModal}>Close</button> */}
        <Button onClick={closeModal} className='text-lg' >Close</Button>
      </Modal>
      
    </div>
  );
}

export default ContactUs;
