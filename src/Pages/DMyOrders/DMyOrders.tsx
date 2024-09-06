import { Link } from "react-router-dom";
import "./DMyOrders.css";
import "./DMyOrdersResponsive.css";

const DMyOrders = () => {
	const handleNavBar = () => {
		const navBar = document.querySelector(".topNavBarWrap") as HTMLDivElement;
		const overlay = document.querySelector(
			".overlayDMyOrders"
		) as HTMLDivElement;

		if (navBar.classList.contains("getNone")) {
			navBar.classList.remove("getNone");
			overlay.classList.remove("getNone");
			document.body.style.overflowY = "hidden";
		} else {
			navBar.classList.add("getNone");
			overlay.classList.add("getNone");
			document.body.style.overflowY = "visible";
		}
	};
	return (
		<>
			<div className="DmyOrdersWrapper">
				<h2 className="DmyOrdersTitle">Мои заказы</h2>

				<div className="DmyOrdersHead">
					<div className="divBorderBottom onFocus">
						<Link to={"/dmyorders"}>
							<h4 className="DmyOrdersHeadTitle allOrdersTitle">Все заказы</h4>
						</Link>
					</div>
					<div className="divBorderBottom">
						<Link to={"/dcompleteorder"}>
							<h4 className="DmyOrdersHeadTitle completedTitle">Завершенные</h4>
						</Link>
					</div>
				</div>

				<div className="DmyOrdersBody">
					<div className="DmyOrdersLeft">
						<div className="DmyOrdersLeftItem itemOnFocus">
							<img
								src="/duty-free/Sources/topNavBarImg.png"
								alt=""
								className="DmyOrdersLeftImg"
							/>

							<div className="DmyOrdersLeftRight">
								<div className="nickAndOrder">
									<h3 className="DmyOrdersNick">User</h3>
									<h3 className="DmyOrdersOrderNum">
										Заказ <span className="montserratFamily">№123</span>
									</h3>
								</div>
								<p className="DmyOrderDesc">Описание заказа</p>
								<p className="DmyOrderDesc seeDetail">Просмотреть детал</p>
							</div>
						</div>
						<div className="DmyOrdersLeftItem">
							<img
								src="/duty-free/Sources/topNavBarImg.png"
								alt=""
								className="DmyOrdersLeftImg"
							/>

							<div className="DmyOrdersLeftRight">
								<div className="nickAndOrder">
									<h3 className="DmyOrdersNick">User</h3>
									<h3 className="DmyOrdersOrderNum">
										Заказ <span className="montserratFamily">№001</span>
									</h3>
								</div>
								<p className="DmyOrderDesc">Описание заказа</p>
								<p className="DmyOrderDesc seeDetail">Просмотреть детал</p>
							</div>
						</div>
					</div>

					<div className="DmyOrdersRight">
						<div className="DmyOrdersRightHead">
							<div>
								<img
									src="/duty-free/Sources/fileImg.png"
									alt=""
									className="fileImg"
								/>
							</div>
							<div className="DmyOrdersRightHeadRight">
								<div className="DflexJustifyCenter">
									<h3 className="HeadrightTitle">
										Заказ <span className="montserratFamily">№123</span>
									</h3>
									<h3 className="HeadrightTitle">User</h3>
								</div>
								<img
									onClick={handleNavBar}
									src="/duty-free/Sources/topNavBarImg.png"
									alt=""
									className="HeadRightImg"
								/>
							</div>
						</div>

						<div className="DchatHistory">
							<h4 className="chatHistoryTitle">Вы откликнулись на заказ</h4>

							<div className="chatHistoryBody">
								<div className="DchatMessage DadminChatMessage">
									Добрый день, опишите, пожалуйста, подробнее, что бы вы хотели
									приобрести
									<p className="messageTime">10:15 pm</p>
								</div>
								<div className="DchatMessage DuserChatMessage">
									Здравствуйте, вот: <p className="messageTime">10:15 pm</p>
								</div>
								<div className="DchatMessage DadminChatMessage">
									Поняла, укажите дату и адрес, куда доставить товары. Либо же
									можем договориться о личной встрече
									<p className="messageTime">10:15 pm</p>
								</div>

								<p className="chatSecondDesc">
									Заказчик выбрал Вас в качестве исполнителя
								</p>
								<button className="chatHistoryBtn">Завершить заказ</button>
							</div>

							<div className="chatTextWrapper">
								<div className="textAreaRelative">
									<textarea
										name=""
										id=""
										className="DmyOrdersTextarea"
										placeholder="Написать..."
									></textarea>
									<div className="sendAndFile">
										<div className="uploadContainer">
											<input type="file" className="fileInput" />
											<img
												src="/duty-free/Sources/uploadingImg.svg"
												alt="Upload"
												className="DmyOrdersUpload"
											/>
										</div>
										<img
											src="/duty-free/Sources/telegramImg.svg"
											alt=""
											className="DmyOrdersSend"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="topNavBarWrap getNone">
				<div className="topPerNavBar">
					<div className="topBarBody">
						<div className="topBarLeft">
							<img
								src="/duty-free/Sources/topNavBarImg.png"
								alt=""
								className="topNavBarImg"
							/>
						</div>
						<div className="topBarRight">
							<h3 className="topBarTitle">User</h3>
							<p className="DtopBarDesc">
								Сумма заказа: <span className="montserratFamily">20$</span>{" "}
							</p>
							<p className="DtopBarDesc">
								Доставка: <span className="lighterWeight">до адреса</span>
							</p>
						</div>

						<img
							src="/duty-free/Sources/mainRedHeart.svg"
							alt=""
							className="dReadHeart"
						/>
					</div>
					<div className="navBarFoot">
						<h4 className="navBarFootTitle">О заказе</h4>
						<p className="navBarFootdesc">
							Краткая информация, которую напишет пользователь
						</p>
					</div>
					<img
						onClick={handleNavBar}
						src="/duty-free/Sources/realCloseImg.svg"
						alt=""
						className="navBarCloseImg"
					/>

					<button className="dMyOrderBtn">Откликнуться</button>
				</div>
			</div>

			<div onClick={handleNavBar} className="overlayDMyOrders getNone"></div>
		</>
	);
};

export default DMyOrders;
