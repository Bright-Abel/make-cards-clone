const ContactUs = () => {
  return (
    <section className="bg-white rounded-[12px] px-10 py-6  lg:px-8 pt-6 pb-10  lg:w-[50%]">
      <div className="">
        <h1 className="font-medium  md:text-xl text-lg text-[#383A3C]">
          Connect with us
        </h1>
        <p className="text-[#65696B] text-sm lg:text-md md:text-md mt-2">
          For further inquiry or complaint, please do not hesitate to reach out
          to us directly.
        </p>
      </div>

      <form action="" className="mt-5 flex flex-col gap-5">
        <div className="">
          <label
            htmlFor="messageHeading"
            className="text-[#9ca1a5e7] font-bold text-sm"
          >
            Subject
          </label>

          <input
            type="text"
            name="messageHeading"
            id="messageHeading"
            className="w-full outline-none border py-[.7rem] rounded-lg mt-2 focus:border-teal-500 pl-3"
            placeholder="Type subject"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="messageBody"
            className="text-[#9ca1a5e7] font-bold text-sm"
          >
            Message
          </label>
          <textarea
            maxlength="10000"
            class="border resize-none rounded-lg p-3 outline-none focus:border-teal-500 mt-3"
            placeholder="Type your message here"
            cols="30"
            rows="8"
            name="messageBody"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 py-3 text-center text-white rounded-[29px] font-bold mt-4"
        >
          Submit message
        </button>
      </form>
    </section>
  );
};
export default ContactUs;
