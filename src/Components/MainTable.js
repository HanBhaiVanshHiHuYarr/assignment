import React, { useEffect, useState } from "react";
import TableBottomPane from "./TableBottomPane";
import TableTopPane from "./TableTopPane";

import SingleElement from "./SingleElement";
import ProfilePic from "../Assets/profile.svg";

function MainTable() {
	const [page, setPage] = useState(0);
	const [currentData, setCurrentData] = useState([]);
	const sampledata = [
		{
			name: "Phoenix Baker 1",
			email: "phoenix@usetrinity.com",
			status: "Active",
			role: "Admin",
			lastLogin: "Jun 20, 2022",
		},
		{
			name: "Lana Baker 2",
			email: "Lana@usetrinity.com",
			status: "Invited",
			role: "Sales Leader",
			lastLogin: "Jun 20, 2022",
		},
		{
			name: "Phoenix Baker 3",
			email: "phoenix@usetrinity.com",
			status: "Active",
			role: "Admin",
			lastLogin: "Jun 20, 2022",
		},
		{
			name: "Lana Baker 4",
			email: "Lana@usetrinity.com",
			status: "Invited",
			role: "Sales Leader",
			lastLogin: "Jun 20, 2022",
		},
		{
			name: "Lana Baker 5",
			email: "Lana@usetrinity.com",
			status: "Invited",
			role: "Sales Leader",
			lastLogin: "Jun 20, 2022",
		},
		{
			name: "Phoenix Baker 6",
			email: "phoenix@usetrinity.com",
			status: "Active",
			role: "Admin",
			lastLogin: "Jun 20, 2022",
		},
		{
			name: "Lana Baker 7",
			email: "Lana@usetrinity.com",
			status: "Invited",
			role: "Sales Leader",
			lastLogin: "Jun 20, 2022",
		},
		{
			name: "Lana Baker 8",
			email: "Lana@usetrinity.com",
			status: "Invited",
			role: "Sales Leader",
			lastLogin: "Jun 20, 2022",
		},
	];

	useEffect(() => {
		let tempData = sampledata.filter((item, index) => {
			if (index >= (page*5) && index < (page*5) + 5) {
				item.index = index;
				return item;
			}
		});
		console.log(tempData);
		setCurrentData(tempData);
	}, [page]);

	return (
		<div className='h-full w-full bg-white rounded-md drop-shadow-md outline outline-2 outline-neutral-200 flex flex-col divide-y-2'>
			<TableTopPane />
			<div className=''>
				{currentData.map((item) => {
					return <SingleElement data={item} />;
				})}
			</div>
			<TableBottomPane page={page} setPage={setPage} maxPage={Math.ceil(sampledata.length/5) -1 } />
		</div>
	);
}

export default MainTable;
