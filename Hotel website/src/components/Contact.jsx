import contactus from '../image/contactus.jpeg';

const Contact = () => {
  return (
    <div className="flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div id="contact" className="grid lg:grid-cols-2 gap-8 w-full max-w-7xl items-center">
      <div className="col-span-2 lg:col-span-1 w-full h-full animate__animated animate__bounceIn flex justify-center">
          <img src={contactus} alt="Contact Us" className="w-full h-auto object-contain" />
        </div>
        
        <div className="flex flex-col justify-center items-center p-5 md:p-10 lg:p-20 gap-6 w-full bg-white border-4 border-white shadow-md rounded-md">
          <label htmlFor="username" className="w-full">
            <strong>Name:</strong>
            <input type="text" id="username" placeholder="Enter your Name" className="border p-2 border-black rounded-md w-full h-[35px] mt-2"/>
          </label>
          
          <label htmlFor="email" className="w-full">
            <strong>Email:</strong>
            <input type="email" id="email" placeholder="Enter your email" className="border p-2 border-black rounded-md w-full h-[35px] mt-2"/>
          </label>
          
          <label htmlFor="subject" className="w-full">
            <strong>Subject:</strong>
            <input type="text" id="subject" placeholder="Related to?" className="border p-2 text-black border-black rounded-md w-full h-[35px] mt-2"/>
          </label>
          
          <button type="submit" className="border bg-black text-white border-white p-2 rounded-lg mt-4 w-full lg:w-[350px]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
