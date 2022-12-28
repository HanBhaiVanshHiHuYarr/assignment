import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function YesNo() {
	
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
		
		// setVisible(false);
		successToast("User added sucessfully");
	};

	return (
		<div className='w-screen h-screen bottom-0 right-0 fixed bg-neutral-200/70 z-50 flex flex-col justify-center items-center'>
			<div className='w-1/2 py-10 bg-white rounded-xl drop-shadow-lg flex flex-col'>
				<h1 className=' font-bold text-center text-neutral-800 text-3xl'>
					Enter the details
				</h1>
				<div className='flex w-full justify-between pt-6'>
					<button
						className='w-2/5 drop-shadow-md text-xl text-white bg-red-500 p-2 rounded-md'
						onClick={() => {
							// setVisible(false);
						}}>
						Close
					</button>
					<button className='w-2/5 drop-shadow-md text-xl text-white bg-green-500 p-2 rounded-md'>
						Create
					</button>
				</div>
			</div>
		</div>
	);
}

export default YesNo;
