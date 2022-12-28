import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Modal({ setSampleData, setVisible, lastIndex }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState("");
	const [role, setRole] = useState("");
	const [date, setDate] = useState("");
	const successToast = (data) =>
		toast.success(data, {
			position: "bottom-right",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

	const handleClick = (e) => {
		e.preventDefault();
		let tempData = {};
		tempData.name = name;
		tempData.email = email;
		tempData.status = status;
		tempData.role = role;
		tempData.lastLogin = date;
		tempData.index = lastIndex + 1;

		setSampleData((prev) => {
			return [...prev, tempData];
		});
		setVisible(false);
		successToast("User added sucessfully");
	};

	return (
		<div className='w-screen h-screen bottom-0 right-0 fixed bg-neutral-200/70 z-50 flex flex-col justify-center items-center'>
			<div className='w-1/2 py-10 bg-white rounded-xl drop-shadow-lg flex flex-col'>
				<h1 className=' font-bold text-center text-neutral-800 text-3xl'>
					Enter the details
				</h1>
				<form onSubmit={handleClick} className='flex flex-col h-full px-6'>
					<br></br>
					<div className='flex flex-col mt-2'>
						<label className='font-bold text-neutral-800'>Name</label>
						<input
							type='text'
							className='bg-neutral-100 rounded-md p-3'
							placeholder='Enter name here'
							value={name}
							required
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div className='flex flex-col  mt-2'>
						<label className='font-bold text-neutral-800'>Email</label>
						<ToastContainer />
						<input
							type='email'
							className='bg-neutral-100 rounded-md p-3'
							placeholder='Enter email here'
							value={email}
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='flex flex-col  mt-2'>
						<label className='font-bold text-neutral-800'>Status</label>
						<input
							type='text'
							className='bg-neutral-100 rounded-md p-3'
							placeholder='Enter status here'
							value={status}
							required
							onChange={(e) => setStatus(e.target.value)}
						/>
					</div>
					<div className='flex flex-col  mt-2'>
						<label className='font-bold text-neutral-800'>Role</label>
						<input
							type='text'
							className='bg-neutral-100 rounded-md p-3'
							placeholder='Enter role here'
							value={role}
							required
							onChange={(e) => setRole(e.target.value)}
						/>
					</div>
					<div className='flex flex-col  mt-2'>
						<label className='font-bold text-neutral-800'>Date</label>
						<input
							type='text'
							className='bg-neutral-100 rounded-md p-3'
							placeholder='Enter date here'
							value={date}
							required
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
					<div className='flex w-full justify-between pt-6'>
						<button
							className='w-2/5 drop-shadow-md text-xl text-white bg-red-500 p-2 rounded-md'
							onClick={() => {
								setVisible(false);
							}}>
							Close
						</button>
						<button className='w-2/5 drop-shadow-md text-xl text-white bg-green-500 p-2 rounded-md'>
							Create
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Modal;
