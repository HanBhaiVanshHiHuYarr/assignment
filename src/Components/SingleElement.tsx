import React, { useState } from "react";
import Modal from "./Modal";

const ProfilePic: string = require("../Assets/profile.svg").default;

function SingleElement({ data, setSampleData, sampledata }) {

	const handleDelete = () => {
		let final = [];
		final = sampledata.filter((item) => item.index !== data.index);
		console.log(final);
		setSampleData(final);
	};

	const handleEdit = () => {
		setVisible(true);
	};

	const [visible, setVisible] = useState(false);

	if (data.color % 2 === 0) {
		return (
			<div className=' h-20 flex bg-slate-100 p-3 items-center'>
				<img
					src={ProfilePic}
					className='h-4/5 w-auto rounded-full'
					alt='profilePic'
				/>
				<div className='flex flex-col grow pl-3 justify-center'>
					<h1 className='text-lg font-semibold'>{data.name}</h1>
					<h1 className='text-sm text-neutral-500 font-medium'>{data.email}</h1>
				</div>
				<div className='w-1/2 flex'>
					<div className=' w-1/4 flex items-center justify-center'>
						{data.status === "Active" ? (
							<h1 className='text-green-700 h-fit p-1 bg-green-100 font-bold text-sm px-2 rounded-xl'>
								● {data.status}
							</h1>
						) : (
							<h1 className='text-neutral-500 h-fit p-1 bg-neutral-100 font-bold text-sm px-2 rounded-xl'>
								● {data.status}
							</h1>
						)}
					</div>

					<div className='w-1/4 flex items-center justify-center'>
						<h1 className='text-sm text-neutral-500 font-medium'>
							{data.role}
						</h1>
					</div>
					<div className='w-1/4 flex items-center justify-center'>
						<h1 className='text-sm text-neutral-500 font-medium'>
							{data.lastLogin}
						</h1>
					</div>
					<div className=' flex w-1/4 flex items-center justify-center'>
						<button
							className='fa-solid text-neutral-500 fa-trash-can m-3'
							onClick={handleDelete}></button>
						<button
							className='fa-solid text-neutral-500 fa-pencil m-3'
							onClick={handleEdit}></button>
						{visible && (
							<Modal
								setVisible={setVisible}
								setSampleData={setSampleData}
								prevData={data}
								modify={true}
								sampledata = {sampledata}
							/>
						)}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className=' h-20 flex bg-white p-3 items-center'>
				<img
					src={ProfilePic}
					className='h-4/5 w-auto rounded-full'
					alt='ProfilePic'
				/>
				<div className='flex flex-col grow pl-3 justify-center'>
					<h1 className='text-lg font-semibold'>{data.name}</h1>
					<h1 className='text-sm text-neutral-500 font-medium'>{data.email}</h1>
				</div>
				<div className='w-1/2 flex'>
					<div className=' w-1/4 flex items-center justify-center'>
						{data.status === "Active" ? (
							<h1 className='text-green-700 h-fit p-1 bg-green-100 font-bold text-sm px-2 rounded-xl'>
								● {data.status}
							</h1>
						) : (
							<h1 className='text-neutral-500 h-fit p-1 bg-neutral-100 font-bold text-sm px-2 rounded-xl'>
								● {data.status}
							</h1>
						)}
					</div>

					<div className='w-1/4 flex items-center justify-center'>
						<h1 className='text-sm text-neutral-500 font-medium'>
							{data.role}
						</h1>
					</div>
					<div className='w-1/4 flex items-center justify-center'>
						<h1 className='text-sm text-neutral-500 font-medium'>
							Jun 20, 2022
						</h1>
					</div>
					<div className=' flex w-1/4 flex items-center justify-center'>
						<button
							className='fa-solid text-neutral-500 fa-trash-can m-3'
							onClick={handleDelete}>
							
						</button>
						<button
							className='fa-solid text-neutral-500 fa-pencil m-3'
							onClick={handleEdit}></button>
						{visible && (
							<Modal
								setVisible={setVisible}
								setSampleData={setSampleData}
								sampledata={sampledata}
								prevData={data}
								modify={true}
							/>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default SingleElement;
