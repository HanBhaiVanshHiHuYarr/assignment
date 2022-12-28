import React from "react";

function TableBottomPane({ page, setPage, maxPage }) {
	console.log(page, maxPage);
	const previousHandeler = () => {
		if (page == 0) {
			alert("This is the first page");
		} else {
			setPage(page - 1);
		}
	};
	const nextHandler = () => {
		if (page == maxPage) {
			alert("This is the last page");
		} else {
			setPage(page + 1);
		}
	};
	return (
		<div className='flex items-center justify-between p-5'>
			<button
				onClick={previousHandeler}
				className='outline outline-2 outline-neutral-300 hover:bg-neutral-50 shadow-md rounded-md px-4 py-2 text-neutral-600 font-bold'>
				Previous
			</button>
			<div></div>
			<button
				onClick={nextHandler}
				className='outline outline-2 outline-neutral-300 hover:bg-neutral-50 shadow-md rounded-md px-4 py-2 text-neutral-600 font-bold'>
				Next
			</button>
		</div>
	);
}

export default TableBottomPane;
