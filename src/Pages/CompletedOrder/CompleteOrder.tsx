import { Link } from "react-router-dom";
import "./CompleteOrder.css";
import "./CompleteOrderResponsive.css";

const CompleteOrder = () => {
	return (
		<>
			<div className="myOrdersWrapper">
				<h2 className="myOrdersTitle">Мои заказы</h2>

				<div className="myOrdersHead">
					<div className="divBorderBottom">
						<Link to={"/userorders"}>
							<h4 className="myOrdersHeadTitle allOrdersTitle">Все заказы</h4>
						</Link>
					</div>
					<div className="divBorderBottom onFocus">
						<Link to={"/completeorder"}>
							<h4 className="myOrdersHeadTitle completedTitle">Завершенные</h4>
						</Link>
					</div>
				</div>

				{/* <div className="myOrdersBody">
					<div className="myOrdersLeft">
						<div className="myOrdersLeftItem">
							<img
								src="/duty-free/Sources/recoUserImg.png"
								alt=""
								className="myOrdersLeftImg"
							/>

							<div className="myOrdersLeftRight">
								<div className="nickAndOrder">
									<h3 className="myOrdersNick">Nickname</h3>
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
								<div className="flexJustifyCenter">
									<h3 className="HeadrightTitle">
										Заказ <span className="montserratFamily">№123</span>
									</h3>
									<h3 className="HeadrightTitle">Nickname</h3>
								</div>
								<img
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
								<p className="chatBottomDesc">Заказ исполнен</p>
							</div>
						</div>
					</div>
				</div> */}
				<div className="allOrdersWrapperC">
					<div className="allOrderItem">
						<div className="orderItemHeadC orderItemHead1">
							<button className="inProccess">В процессе</button>
							<h3 className="numberOfOrder">Заказ №123</h3>
						</div>

						<div className="orderItemBody">
							<p className="orderItemInfo orderItemNickname">
								Исполнитель: <span className="lighterSpan">Nickname </span>
							</p>
							<p className="orderItemInfo orderItemPrice">
								Сумма заказа: <span className="orderPriceWeight">20$</span>
							</p>
							<p className="orderItemInfo orderItemAddress">
								Доставка: <span className="lighterSpan">улица, дом</span>
							</p>
						</div>

						<div className="orderItemFoot">
							<p className="orderItemDate">
								Создан<span className="orderPriceWeight"> 25.05.24</span>
							</p>
							<button className="orderItemState">Отклики</button>
						</div>
					</div>
					<div className="allOrderItem">
						<div className="orderItemHeadC orderItemHead1">
							<button className="inProccess">В процессе</button>
							<h3 className="numberOfOrder">Заказ №123</h3>
						</div>

						<div className="orderItemBody">
							<p className="orderItemInfo orderItemNickname">
								Исполнитель: <span className="lighterSpan">Nickname </span>
							</p>
							<p className="orderItemInfo orderItemPrice">
								Сумма заказа: <span className="orderPriceWeight">20$</span>
							</p>
							<p className="orderItemInfo orderItemAddress">
								Доставка: <span className="lighterSpan">улица, дом</span>
							</p>
						</div>

						<div className="orderItemFoot">
							<p className="orderItemDate">
								Создан<span className="orderPriceWeight"> 25.05.24</span>
							</p>
							<button className="orderItemState">Отклики</button>
						</div>
					</div>
				</div>

				{/* <div className="smallBar">
					<div className="smallBarBody">
						<div className="smallBarBodyLeft">
							<img
								src="/duty-free/Sources/recoUserImg.png"
								alt=""
								className="smallBarImg"
							/>
						</div>

						<div className="smallBarBodyRight">
							<h3 className="smallBarTitle">Nickname</h3>
							<p className="smallBarFirstDesc">Новый отклик на заказ</p>
							<p className="smallBarSecDesc">Нажмите, чтобы посмотреть</p>
						</div>
					</div>
				</div> */}
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
								src="/duty-free/Sources/recoUserImg.png"
								alt=""
								className="topNavBarImg"
							/>
						</div>
						<div className="topBarRight">
							<h3 className="topBarTitle">Nickname</h3>
							<img
								src="/duty-free/Sources/recoStar.png"
								alt=""
								className="topBarDesc"
							/>
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
					<img
						src="/duty-free/Sources/closeImg.png"
						alt=""
						className="navBarCloseImg"
					/>
				</div>
			</div> */}
		</>
	);
};

export default CompleteOrder;
