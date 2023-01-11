import React, {useState, FC} from 'react';
import {toast, ToastContainer} from 'react-toastify';

interface DisplayData {
  color?: number;
  email: string;
  index?: number;
  lastLogin: string;
  name: string;
  role: string;
  status: string;
}

interface Props {
  setSampleData: React.Dispatch<React.SetStateAction<DisplayData[]>>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  lastIndex?: number;
  prevData: DisplayData;
  modify?: boolean;
  sampledata?: DisplayData[];
}

const Modal: FC<Props> = ({
  setSampleData,
  setVisible,
  lastIndex,
  prevData,
  modify,
  sampledata,
}) => {
  const [name, setName] = useState(prevData.name);
  const [email, setEmail] = useState(prevData.email);
  const [status, setStatus] = useState(prevData.status);
  const [role, setRole] = useState(prevData.role);
  const [date, setDate] = useState(prevData.lastLogin);
  const successToast = suc =>
    toast.success(suc, {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const handleClick = e => {
    e.preventDefault();
    const tempData: DisplayData = {
      name,
      email,
      status,
      role,
      lastLogin: date,
      index: lastIndex! + 1,
    };
    setSampleData(prev => {
      return [...prev, tempData];
    });
    setVisible(false);
    successToast('User added sucessfully');
  };

  const handleModify = e => {
    e.preventDefault();
    const tempArr = sampledata!.map(item => {
      if (prevData.index === item.index) {
        item.name = name;
        item.email = email;
        item.status = status;
        item.role = role;
        item.lastLogin = date;
        return item;
      } else {
        return item;
      }
    });

    setSampleData(tempArr);
    setVisible(false);
  };

  return (
    <div className="w-screen h-screen bottom-0 right-0 fixed bg-neutral-200/70 z-50 flex flex-col justify-center items-center">
      <div className="w-1/2 py-10 bg-white rounded-xl drop-shadow-lg flex flex-col">
        <h1 className=" font-bold text-center text-neutral-800 text-3xl">
          Enter the details
        </h1>
        <form className="flex flex-col h-full px-6">
          <br></br>
          <div className="flex flex-col mt-2">
            <label className="font-bold text-neutral-800">Name</label>
            <input
              type="text"
              className="bg-neutral-100 rounded-md p-3"
              placeholder="Enter name here"
              value={name}
              required
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col  mt-2">
            <label className="font-bold text-neutral-800">Email</label>
            <ToastContainer />
            <input
              type="email"
              className="bg-neutral-100 rounded-md p-3"
              placeholder="Enter email here"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col  mt-2">
            <label className="font-bold text-neutral-800">Status</label>
            <input
              type="text"
              className="bg-neutral-100 rounded-md p-3"
              placeholder="Enter status here"
              value={status}
              required
              onChange={e => setStatus(e.target.value)}
            />
          </div>
          <div className="flex flex-col  mt-2">
            <label className="font-bold text-neutral-800">Role</label>
            <input
              type="text"
              className="bg-neutral-100 rounded-md p-3"
              placeholder="Enter role here"
              value={role}
              required
              onChange={e => setRole(e.target.value)}
            />
          </div>
          <div className="flex flex-col  mt-2">
            <label className="font-bold text-neutral-800">Date</label>
            <input
              type="text"
              className="bg-neutral-100 rounded-md p-3"
              placeholder="Enter date here"
              value={date}
              required
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <div className="flex w-full justify-between pt-6">
            <button
              className="w-2/5 drop-shadow-md text-xl text-white bg-red-500 p-2 rounded-md"
              onClick={() => {
                setVisible(false);
              }}
            >
              Close
            </button>

            {modify ? (
              <button
                onClick={handleModify}
                className="w-2/5 drop-shadow-md text-xl text-white bg-green-500 p-2 rounded-md"
              >
                Modify
              </button>
            ) : (
              <button
                onClick={handleClick}
                className="w-2/5 drop-shadow-md text-xl text-white bg-green-500 p-2 rounded-md"
              >
                Create
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
