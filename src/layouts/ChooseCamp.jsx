import React, { useState } from "react";
import { Modal } from "../components";

const ChooseCamp = () => {
	const [toggleModal, setToggleModal] = useState(false);
	const [selectedCamp, setSelectedCamp] = useState("")

	const modalToggle = (chosenCamp) => {
		setToggleModal((prevToggle) => !prevToggle);
		setSelectedCamp(chosenCamp)
	};


	return (
		<div id="subcamp" className="flex justify-center items-center flex-wrap flex-col md:flex-row space-x-4">
			{[
				{
					name: "Webtopia Town",
					description:
						"“เมืองแห่งซอฟแวร์ที่จะสร้างโลกในอุดมคติให้เป็นดั่งใจนึก”",
					image: "/camp-logo-1.png",
					primaryColor: "red",
				},
				{
					name: "Datavergent Town",
					description:
						"“เมืองแห่งข้อมูลที่จะสร้างโลกอันแตกต่างด้วยพลังที่ล้ำค่า”",
					image: "/camp-logo-2.png",
					primaryColor: "#EFDEB5",
				},
				{
					name: "Game Runner Town",
					description:
						"“เมืองแห่งการรังสรรค์ที่จะสร้างโลกจากความฝันและจินตนาการ”",
					image: "/camp-logo-3.png",
					primaryColor: "#DDEED9",
				},
				{
					name: "Nettapunk Town",
					description:
						"“เมืองแห่งเครือข่ายที่จะสร้างโลกแห่งการสื่อสารที่ไร้ขีดจำกัด”",
					image: "/camp-logo-4.png",
					primaryColor: "#B0C2FF",
				},
			].map(({ name, description, image, primaryColor }) => {
				return (
					<div className="each-camp flex flex-col items-center mt-12" key={name}>
						<img src={image} alt={name} className="w-[15em] md:w-[20em]" />
						<h3 className="text-center mt-4 text-3xl font-bold text-white">
							{name}
						</h3>
						<p className="text-white/80 mt-2 text-lg text-center max-w-[15em] ">
							{description}
						</p>
						{name === "Webtopia Town" && (
							<button
								onClick={() => modalToggle(name)}
								className="each-camp-button px-10 py-3 bg-[#F2C9CA] text-[#5A0A0A] font-semibold rounded-full mt-4 shadow"
							>
								ดูรายละเอียด
							</button>
						)}
						{name === "Datavergent Town" && (
							<button
								onClick={() => modalToggle(name)}
								className="each-camp-button px-10 py-3 bg-[#EFDEB5] text-[#5A3F0A] font-semibold rounded-full mt-4 shadow"
							>
								ดูรายละเอียด
							</button>
						)}
						{name === "Game Runner Town" && (
							<button
								onClick={() => modalToggle(name)}
								className="each-camp-button px-10 py-3 bg-[#DDEED9] text-[#246C2B] font-semibold rounded-full mt-4 shadow"
							>
								ดูรายละเอียด
							</button>
						)}
						{name === "Nettapunk Town" && (
							<button
								onClick={() => modalToggle(name)}
								className="each-camp-button px-10 py-3 bg-[#B0C2FF] text-[#293B79] font-semibold rounded-full mt-4 shadow"
							>
								ดูรายละเอียด
							</button>
						)}
					</div>
				);
			})}

			{/* ส่วนของ Modal ให้พี่ภูมิแก้ */}
			{toggleModal && <Modal setToggleModal={setToggleModal} selectedCamp={selectedCamp} />}
		</div>
	);
};

export default ChooseCamp;
