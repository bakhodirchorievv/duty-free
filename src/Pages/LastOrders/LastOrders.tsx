import "./LastOrders.css";
import "./LastOrdersResponsive.css";

const LastOrders = () => {
	return (
		<>
			<div className="lastOrders">
				<div className="lastOrdersHead">
					<h2 className="orderingGeneralTitle lastOrdersTitle">
						Мои заказы <span className="pinkBackFont">ВСЕ ЗАКАЗЫ</span>
					</h2>

					<div className="allOrdersWrapper">
						<div className="allOrderItem">
							<div className="orderItemHead">
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
								<button className="orderItemState">В заказ</button>
							</div>
						</div>
					</div>
				</div>
				<div className="lastOrdersHead lastOrdersBottom">
					<h2 className="orderingGeneralTitle lastOrdersTitle">
						Последние опубликованные заказы{" "}
						<span className="pinkBackFont">ВСЕ ЗАКАЗЫ</span>
					</h2>

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

export default LastOrders;
