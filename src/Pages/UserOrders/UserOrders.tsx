import { Link } from "react-router-dom";
import "./UserOrders.css";
import "./UserOrdersResponsive.css";

const UserOrders = () => {
	return (
		<>
			<div className="myOrdersWrapper">
				<h2 className="myOrdersTitle">Мои заказы</h2>

				<div className="myOrdersHead">
					<Link to={"/userorders"}>
						<h4 className="myOrdersHeadTitle allOrdersTitle onFocus">
							Все заказы
						</h4>
					</Link>
					<Link to={"/completeorder"}>
						<h4 className="myOrdersHeadTitle completedTitle">Завершенные</h4>
					</Link>
				</div>

				<div className="allOrdersWrapper">
					<div className="allOrderItem">
						<div className="orderItemHead orderItemHead1">
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
							<Link to={"/usermessages"}>
								<button className="orderItemState">Отклики</button>
							</Link>
						</div>
					</div>
					<div className="allOrderItem">
						<div className="orderItemHead orderItemHead1">
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
							<Link to={"/usermessages"}>
								<button className="orderItemState">Отклики</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserOrders;
