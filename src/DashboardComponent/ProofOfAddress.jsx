import styled from 'styled-components';
import SelectInput from './SelectInput';
import Input from './Input';
const ProofOfAddress = () => {
  return (
    <Wrapper>
      <form className="w-full ">
        <h4 className="font-medium text-[#383A3C]  md:text-xl text-lg">
          Proof of address
        </h4>
        <div className="flex flex-col pt-[2rem] pb-8">
          <label htmlFor="" className="text-[#9CA1A5] text-sm">
            Country
          </label>
          <SelectInput />
        </div>

        <div className="flex flex-col gap-8">
          <Input
            labelText="House Number"
            name="houseNumber"
            placeholder="Type house number"
            type="text"
          />

          <Input
            labelText="Street Name"
            name="streetName"
            placeholder="Type street name"
            type="text"
          />

          <Input
            labelText="City"
            name="cityName"
            placeholder="Type city"
            type="text"
          />
        </div>
        <div className="flex flex-col pt-[2rem] pb-2">
          <label htmlFor="" className="text-[#9CA1A5] text-sm">
            Upload a utility bill
          </label>
          <div class=" bg-transparent w-full pt-2 outline-none border-b border-[#a4a9a1] focus-within:border-[#2FCFB7]">
            {/* <span>
              <h1>CHOOSE FILE</h1>
              <div className="bg-gray-500 w-[1px] h-10"></div>
              <p>no file chosen</p>
            </span> */}
            <input
              type="file"
              id="upload"
              name="imageUpload"
              className="text-md border-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 py-3 text-center text-white rounded-[29px] font-bold mt-8"
        >
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
export default ProofOfAddress;

const Wrapper = styled.section`
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem 2.5rem;
  height: fit-content;

  @media (min-width: 1024px) {
    width: 50%;
    padding-bottom: 4rem;
  }
  .api {
    border-color: transparent;
    border: none;
  }

  .custom-file-upload {
    display: inline-block;
    position: relative;
    overflow: hidden;
    margin-top: 8px; /* Adjust as needed */
  }

  .custom-file-upload input[type='file'] {
    /* position: absolute; */
    font-size: 10px;
    right: 0;
    top: 0;
    /* opacity: 0; */
    cursor: pointer;
  }

  .custom-file-upload span {
    display: flex;
    padding: 8px 20px;

    gap: 1rem;
    align-items: center;
    color: #333;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
  }
`;
