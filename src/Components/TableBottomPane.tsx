import React from "react";
  import { ToastContainer, toast } from "react-toastify";

function TableBottomPane({ page, setPage, maxPage }) {
	const errorToast = (error) =>
		toast.info(error, {
			position: "bottom-right",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	const pageNumbers:number[] = [];
	for (let i = 0; i <= maxPage; i++) {
		pageNumbers.push(i + 1);
	}
	const previousHandler = () => {
		if (page === 0) {
			errorToast("This is the first page")
		} else {
			setPage(page - 1);
		}
	};
	const nextHandler = () => {
		if (page === maxPage) {
			errorToast("This is the last page");
		} else {
			setPage(page + 1);
		}
	};
	const handlePageClick = (pageNumber:number) => {
		setPage(pageNumber - 1);
	};
	return (
		<div className='flex items-center justify-between p-5'>
			<button
				onClick={previousHandler}
				className='outline outline-2 outline-neutral-300 hover:bg-neutral-50 shadow-md rounded-md px-4 py-2 text-neutral-600 font-bold'>
				Previous
			</button>

			<div className='flex'>
				{pageNumbers.map((pageNumber, i) => {
					if (pageNumber - 1 === page) {
						return (
							<button
								onClick={() => {
									handlePageClick(pageNumber);
								}}
								className='outline mx-2 outline-2 outline-neutral-300 bg-neutral-200 hover:bg-neutral-100 shadow-md rounded-md px-4 py-2 text-neutral-600 font-bold'>
								{pageNumber}
							</button>
						);
					} else {
						return (
							<button
								onClick={() => {
									handlePageClick(pageNumber);
								}}
								className='outline mx-2 outline-2 outline-neutral-300 hover:bg-neutral-100 shadow-md rounded-md px-4 py-2 text-neutral-600 font-bold'>
								{pageNumber}
								<ToastContainer />
							</button>
						);
					}
				})}
			</div>
			<button
				onClick={nextHandler}
				className='outline outline-2 outline-neutral-300 hover:bg-neutral-50 shadow-md rounded-md px-4 py-2 text-neutral-600 font-bold'>
				Next
			</button>
		</div>
	);
}

export default TableBottomPane;
