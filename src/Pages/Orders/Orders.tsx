import "./Orders.css";
import "./OrdersResponsive.css";

const Orders = () => {
	return (
		<>
			<div className="ordersWrapper">
				<div className="ordersBody">
					<h2 className="ordersBodyTitle">Заказы</h2>

					<div className="performersBodyHead">
						<div className="inputWrapper">
							<img
								src="/duty-free/Sources/searchIcon.png"
								alt=""
								className="searchIcon"
							/>
							<input
								type="text"
								className="performerInput"
								placeholder="Поиск"
							/>
						</div>

						<div>
							<select name="" id="" className="selectDirection">
								<option value="">Основные направления</option>
							</select>
						</div>

						<div className="performToggleWrap">
							<p className="toggleDesc">Онлайн</p>
							<input
								type="checkbox"
								id="performCheck"
								className="performSwitchInput"
							/>
							<label
								htmlFor="performCheck"
								className="performSwitchBtn"
							></label>
						</div>
					</div>

					<div className="allOrdersWrapper">
						<div className="allOrderItem">
							<div className="orderItemHead orderItemHeadLong">
								<img
									src="/duty-free/Sources/topNavBarImg.png"
									alt=""
									className="orderItemHadImg"
								/>
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
								<div className="orderItemFootRight">
									<button className="orderItemFootBtn">Просмотреть</button>
									<button className="orderItemFootBtn orderItemFootPinkbtn">
										Откликнуться
									</button>
								</div>
							</div>
						</div>
						<div className="allOrderItem">
							<div className="orderItemHead orderItemHeadLong">
								<img
									src="/duty-free/Sources/topNavBarImg.png"
									alt=""
									className="orderItemHadImg"
								/>
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
								<div className="orderItemFootRight">
									<button className="orderItemFootBtn">Просмотреть</button>
									<button className="orderItemFootBtn orderItemFootPinkbtn">
										Откликнуться
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Orders;
