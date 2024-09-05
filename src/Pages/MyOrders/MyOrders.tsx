import { Link } from "react-router-dom";
import "./MyOrders.css";
import "./MyOrdersResponsive.css";

const MyOrders = () => {
	const handleNavBar = () => {
		const navBar = document.querySelector(".topNavBarWrapM") as HTMLDivElement;
		const overlay = document.querySelector(
			".myOrdersOverlay"
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
			<div className="myOrdersWrapper">
				<h2 className="myOrdersTitle">Мои заказы</h2>

				<div className="myOrdersHead">
					<h4 className="myOrdersHeadTitle allOrdersTitle onFocus">
						Все заказы
					</h4>
					<Link to={"/completeorder"}>
						<h4 className="myOrdersHeadTitle completedTitle">Завершенные</h4>
					</Link>
				</div>

				<div className="myOrdersBody">
					<div className="myOrdersLeft">
						<div className="allOrderItemMy itemOnFocus">
							<div className="orderItemHeadM orderItemHead1">
								<button className="inProccess">В процессе</button>
								<h3 className="numberOfOrder">Заказ №123</h3>
							</div>

							<div className="orderItemBody">
								<p className="orderItemInfo orderItemNickname">
									Заказчик: <span className="lighterSpan">User </span>
								</p>
								<p className="orderItemInfo orderItemPrice">
									Сумма заказа: <span className="orderPriceWeight">20$</span>
								</p>
								<p className="orderItemInfo orderItemAddress">
									Доставка: <span className="lighterSpan">до адреса</span>
								</p>
							</div>

							<div className="orderItemFoot">
								<p className="orderItemDate">
									Создан<span className="orderPriceWeight"> 25.05.24</span>
								</p>
								<button className="orderItemState">Детали заказа</button>
							</div>
						</div>
					</div>

					<div className="myOrdersRight">
						<div className="myOrdersRightHead">
							<div className="exitAndFile">
								<Link to={"/usermessages"}>
									<img
										src="/duty-free/Sources/exitSign.svg"
										alt=""
										className="exitChatBtn"
									/>
								</Link>
								<img
									src="/duty-free/Sources/realFileImg.svg"
									alt=""
									className="fileImg"
								/>
							</div>
							<div className="myOrdersRightHeadRight">
								<div className="flexJustifyCenter">
									<h3 className="HeadrightTitle">
										Заказ <span className="montserratFamily">№123</span>
									</h3>
									<h3 className="HeadrightTitle">Nickname</h3>
								</div>
								<img
									onClick={handleNavBar}
									src="/duty-free/Sources/recoUserImg.png"
									alt=""
									className="HeadRightImg"
								/>
							</div>
						</div>

						<div className="chatHistory">
							<h4 className="chatHistoryTitle">Отклик на заказ</h4>

							<div className="chatHistoryBody">
								<div className="chatMessage adminChatMessage">
									Добрый день, опишите, пожалуйста, подробнее, что бы вы хотели
									приобрести
									<p className="messageTime">10:15 pm</p>
								</div>
								<div className="chatMessage userChatMessage">
									Здравствуйте, вот: <p className="messageTime">10:15 pm</p>
								</div>
								<div className="chatMessage adminChatMessage">
									Поняла, укажите дату и адрес, куда доставить товары. Либо же
									можем договориться о личной встрече
									<p className="messageTime">10:15 pm</p>
								</div>
								<button className="chatHistoryBtn">
									Выбрать этого исполнителя
								</button>
							</div>

							<div className="chatTextWrapper">
								<div className="textAreaRelative">
									<textarea
										name=""
										id=""
										className="myOrdersTextarea"
										placeholder="Написать..."
									></textarea>
									<div className="sendAndFile">
										<div className="uploadContainer">
											<input type="file" className="fileInput" />
											<img
												src="/duty-free/Sources/uploadingImg.svg"
												alt="Upload"
												className="myOrdersUpload"
											/>
										</div>
										<img
											src="/duty-free/Sources/telegramImg.svg"
											alt=""
											className="myOrdersSend"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="topNavBarWrapM getNone">
				<div className="topPerNavBarM">
					<div className="topBarBody">
						<div className="topBarLeft">
							<img
								src="/duty-free/Sources/recoUserImg.png"
								alt=""
								className="topNavBarImg"
							/>
						</div>
						<div className="topBarRight">
							<h3 className="topBarTitle">Nickname</h3>
							<img
								src="/duty-free/Sources/realStars.svg"
								alt=""
								className="topBarDesc"
							/>
							<p className="performerDesc navBarClock">
								{" "}
								{/* <div> */}
								<img
									src="/duty-free/Sources/realClockIcon.svg"
									alt=""
									className="performerClock"
								/>{" "}
								{/* </div> */}
								&gt;<span className="montserratFamily">1 </span> года на сервисе
							</p>
						</div>

						<img
							src="/duty-free/Sources/redHeart.png"
							alt=""
							className="navBarRedHeart"
						/>
					</div>

					<div className="navBarFoot">
						<p className="NavBarAddress">
							Основные направления:
							<span className="lighterWeight"> Россия, Германия</span>
						</p>
						<div className="navbarFootCenter">
							<h3 className="aboutUser">О пользователе</h3>
							<p className="navBarFootdesc">
								Краткая информация, которую напишет пользователь
							</p>
						</div>

						<div className="navBarBottom">
							<h3 className="navbarBottomTitle">Отзывы</h3>

							<div className="inputAndStar">
								<input
									type="text"
									className="writeReviewInput"
									placeholder="Написать отзыв"
								/>
								<img
									src="/duty-free/Sources/grayStars.png"
									alt=""
									className="grayStars"
								/>
							</div>
						</div>

						<div className="navBarSelectWrap">
							<select name="" id="" className="navBarSelect">
								<option value="">Сначала новые</option>
							</select>
							<img
								src="/duty-free/Sources/arrowOpen.svg"
								alt=""
								className="arrowOpenNavBar"
							/>
						</div>
					</div>
					<img
						onClick={handleNavBar}
						src="/duty-free/Sources/realCloseImg.svg"
						alt=""
						className="navBarCloseImg"
					/>
				</div>
			</div>

			<div onClick={handleNavBar} className="myOrdersOverlay getNone"></div>
		</>
	);
};

export default MyOrders;
