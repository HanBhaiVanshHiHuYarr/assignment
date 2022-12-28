import React, { useState } from "react";
import Modal from "./Modal";

function TableTopPane({ setSampleData, lastIndex }) {
	const [visible, setVisible] = useState(false);
	const handleAdd = () => {
		setVisible(true);
	};

	return (
		<div className='flex p-5 items-center'>
			{visible && (
				<Modal
					setSampleData={setSampleData}
					lastIndex = {lastIndex}
					setVisible={setVisible}
				/>
			)}
			<div>
				<div className='flex items-baseline'>
					<h1 className='text-neutral-700 font-bold pr-4 text-xl'>Users</h1>
					<h1 className='text-green-700 bg-green-100 font-bold text-sm px-2 rounded-xl'>
						{" "}
						48 Users
					</h1>
				</div>
				<h1 className='text-neutral-400 font-regular'>
					Manage your team members and their account permissions here
				</h1>
			</div>
			<div className=' grow flex justify-end'>
				<button className='outline outline-2 outline-neutral-300 hover:bg-neutral-50 shadow-md rounded-md px-4 py-2 text-neutral-600 font-bold'>
					Download CSV
				</button>
				<button
					onClick={handleAdd}
					className=' px-6 py-2 bg-blue-500 hover:bg-blue-600  shadow-md rounded-md ml-4 text-white font-bold'>
					Add User
				</button>
			</div>
		</div>
	);
}

export default TableTopPane;
