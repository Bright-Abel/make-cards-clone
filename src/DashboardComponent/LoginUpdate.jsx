import UpdateLoginInput from './UpdateLoginInput';
import { handleChange } from '../features/dashBoardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { CiWarning } from 'react-icons/ci';

const LoginUpdate = () => {
  const { currentPin, viewUpdatedValue, newPin, confirmPin, label } =
    useSelector((store) => store.dashSlice);
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value.replace(/\D/g, '');

    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      currentPin.length !== 4 ||
      newPin.length !== 4 ||
      confirmPin.length !== 4
    ) {
      setErrorMessage('Pin must be 4 digit');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else if (confirmPin !== newPin) {
      toast.error('New PIN and confirm PIN must be the same.', {
        className: 'border border-red-300 bg-red-50 text-sm px-1',
        hideProgressBar: true,
        closeButton: false,
      });
    } else {
      toast.success('PIN is successfully updated.', {
        className: 'border border-red-300 bg-teal-100 text-sm px-1',
        hideProgressBar: true,
        closeButton: false,
      });

      //   window.location.reload();
    }
  };
  return (
    <main className="bg-white rounded-[12px] px-10 py-6  lg:px-8 pt-6 pb-10  lg:w-[50%]">
      <div className="">
        <h1 className="font-medium  md:text-xl text-lg text-[#383A3C]">
          Update Login PIN
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        {/* CURRENT PIN */}
        <UpdateLoginInput
          labelText="Current PIN"
          name="currentPin"
          placeholder="****"
          type={
            viewUpdatedValue && label === 'currentPin' ? 'text' : 'password'
          }
          handleChange={handleInputChange}
          value={currentPin}
        />
        {/* NEW pin */}
        <UpdateLoginInput
          labelText="New PIN"
          name="newPin"
          placeholder="****"
          type={viewUpdatedValue && label === 'newPin' ? 'text' : 'password'}
          handleChange={handleInputChange}
          value={newPin}
        />
        {/* CONFIRM PIN */}
        <UpdateLoginInput
          labelText="Confirm PIN"
          name="confirmPin"
          placeholder="****"
          type={
            viewUpdatedValue && label === 'confirmPin' ? 'text' : 'password'
          }
          handleChange={handleInputChange}
          value={confirmPin}
        />
        {errorMessage ? (
          <span className="text-red-500 flex items-center gap-2 text-[13px]">
            <span className="text-[16px]">
              <CiWarning />
            </span>
            {errorMessage}
          </span>
        ) : null}

        <button
          type="submit"
          className="w-full bg-teal-600 py-3 text-center text-white rounded-[29px] font-bold mt-8"
        >
          Update Login Pin
        </button>
      </form>
    </main>
  );
};
export default LoginUpdate;
