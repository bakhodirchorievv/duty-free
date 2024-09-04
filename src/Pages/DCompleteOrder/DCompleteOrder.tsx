import "./DcompleteOrder.css";
import "./DCompleteOrderResponsive.css";

const DCompleteOrder = () => {
	return (
		<>
			<div className="myOrdersWrapper">
				<h2 className="myOrdersTitle">Мои заказы</h2>

				<div className="myOrdersHead">
					<div className="divBorderBottom">
						<h4 className="myOrdersHeadTitle allOrdersTitle">Все заказы</h4>
					</div>
					<div className="divBorderBottom onFocus">
						<h4 className="myOrdersHeadTitle completedTitle">Завершенные</h4>
					</div>
				</div>

				<div className="myOrdersBody">
					<div className="myOrdersLeft">
						<div className="myOrdersLeftItem">
							<img
								src="/duty-free/Sources/topNavBarImg.png"
								alt=""
								className="myOrdersLeftImg"
							/>

							<div className="myOrdersLeftRight">
								<div className="nickAndOrder">
									<h3 className="myOrdersNick">User</h3>
									<h3 className="myOrdersOrderNum">
										Заказ <span className="montserratFamily">№001</span>
									</h3>
								</div>
								<p className="myOrderDesc">Описание заказа</p>
							</div>
						</div>
					</div>

					<div className="myOrdersRight">
						<div className="myOrdersRightHead">
							<div>
								<img
									src="/duty-free/Sources/fileImg.png"
									alt=""
									className="fileImg"
								/>
							</div>
							<div className="myOrdersRightHeadRight">
								<div className="DflexJustifyCenter">
									<h3 className="HeadrightTitle">
										Заказ <span className="montserratFamily">№123</span>
									</h3>
									<h3 className="HeadrightTitle">User</h3>
								</div>
								<img
									src="/duty-free/Sources/topNavBarImg.png"
									alt=""
									className="HeadRightImg"
								/>
							</div>
						</div>

						<div className="chatHistory">
							<h4 className="chatHistoryTitle">Отклик на заказ</h4>

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

								<p className="chatBottomDesc">Заказ исполнен</p>
							</div>
						</div>
					</div>
				</div>

				<div className="smallBar">
					<div className="smallBarBody">
						<div className="smallBarBodyLeft">
							<img
								src="/duty-free/Sources/topNavBarImg.png"
								alt=""
								className="smallBarImg"
							/>
						</div>

						<div className="smallBarBodyRight">
							<h3 className="smallBarTitle">User</h3>
							<p className="DsmallBarFirstDesc">
								Приглашает Вас выполнить заказ
							</p>
							<p className="smallBarSecDesc">Нажмите, чтобы посмотреть</p>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="topNavBarWrap">
				<div className="topPerNavBar">
					<div className="flexDisplay">
						<button className="performerBtn navBarBtn">
							Предложить исполнить заказ
						</button>
					</div>
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
							<img src="/duty-free/Sources/recoStar.png" alt="" className="topBarDesc" />
							<p className="performerDesc navBarClock">
								{" "}
								<div>
									<img
										src="/duty-free/Sources/recoClock.png"
										alt=""
										className="performerClock"
									/>{" "}
								</div>
								&gt;<span className="montserratFamily">1</span> года на сервисе
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

						<select name="" id="" className="navBarSelect">
							<option value="">Сначала новые</option>
						</select>
					</div>
					<img src="/duty-free/Sources/closeImg.png" alt="" className="navBarCloseImg" />
				</div>
			</div> */}
		</>
	);
};

export default DCompleteOrder;
