"use client";

import React from "react";

const categories = [
	{ label: "Standard" },
	{ label: "Delexue", icon: "/assets/images/orange-circle-white-tick.png" },
	{ label: "Premium" },
];

const StayCategory = ({
	ItineryData,
	slug,
	activeCategory,
	setActiveCategory,
	activeItems,
	setActiveItems,
	handleTabClick,
}) => {
	// Only one static itinerary
	const itinerary = (ItineryData?.division_summary?.[0]?.[0]) || {};

	const chooseOptions = itinerary.chooseOptions || {
		label: "Trip Summary",
		keyName: "trip_summary",
		subOptions: [
			{ label: "Activities & Experience", keyName: "activities" },
			{ label: "Transfer", keyName: "transfers" },
			{ label: "Hotels", keyName: "hotels" },
		],
	};

	// Multi-select for sub-options
	const handleSubOptionClick = (itemIdx) => {
		let newActiveItems = [...activeItems];
		if (newActiveItems.includes(itemIdx)) {
			newActiveItems = newActiveItems.filter((idx) => idx !== itemIdx);
		} else {
			newActiveItems.push(itemIdx);
		}
		setActiveItems(newActiveItems);
		// Log selected sub-options
		const selected = chooseOptions.subOptions.filter((_, idx) => newActiveItems.includes(idx));
		console.log("Selected sub-options:", selected);
	};

	return (
		<>
			<ul className="stay-category-tabs">
				{categories.map((cat, idx) => (
					<li key={cat.label}>
						<a
							//href="#"
							className={activeCategory === idx ? "active" : ""}
							onClick={() => handleTabClick(idx)}
							style={{ cursor: "pointer" }}
						>
							{cat.icon && activeCategory === idx && (
								<img src={cat.icon} alt="Tick" />
							)}
							{cat.label} 
						</a>
					</li>
				))}
			</ul>
			<div className="stay-category-tabpane">
				<div className="stay-category-content-box">
					<ul className="itinerary-list">
						<li>
							<div className="itinerary-row static" style={{ cursor: "default" }}>
								<div
									className={
										"itinerary-id" +
										(activeItems.length === 0 ? " active" : " inactive")
									}
									onClick={() => setActiveItems([])}
									style={{ cursor: "pointer" }}
								>
									Itinerary 
								</div>
								{chooseOptions.subOptions &&
									chooseOptions.subOptions.map((subOpt, itemIdx) => (
										<div
											key={subOpt.keyName}
											className={
												"itinerary-item" +
												(activeItems.includes(itemIdx) ? " active" : "")
											}
											onClick={() => handleSubOptionClick(itemIdx)}
											style={{ cursor: "pointer" }}
										>
											{subOpt.label}
										</div>
									))}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default StayCategory;
