import React from "react";

function TableBottomPane() {
    return (
			<div className='flex items-center justify-between p-5'>
				<button className='outline outline-2 outline-neutral-300 hover:bg-neutral-50 shadow-md rounded-md px-4 py-2 text-neutral-600 font-bold'>
					Previous
				</button>
				<div>{/* page numbers */}</div>
				<button className='outline outline-2 outline-neutral-300 hover:bg-neutral-50 shadow-md rounded-md px-4 py-2 text-neutral-600 font-bold'>
					Next
				</button>
			</div>
		);
}

export default TableBottomPane;
