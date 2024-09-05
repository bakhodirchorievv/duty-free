import { Link } from "react-router-dom";
import "./UserMessages.css";
import "./UserMessagesResponsive.css";

const UserMessages = () => {
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
						<div className="allOrderItemMe itemOnFocus">
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

					<div className="myOrdersRightM">
						<div className="userMessageItemM">
							<div className="userMessageLeft">
								<img
									src="/duty-free/Sources/recoUserImg.png"
									alt=""
									className="userMessageImg"
								/>
							</div>
							<div className="userMessageRight">
								<h3 className="userRealNick">
									Nickname{" "}
									<img
										src="/duty-free/Sources/realOnlineSign.svg"
										alt=""
										className="isUserOnline"
									/>
								</h3>
								<p className="responseMessage">Отклик на заказ</p>
								<p className="messageDesc">
									Добрый день, опишите, пожалуйста, подробнее, что бы вы хотели
									приобрести
								</p>
							</div>
						</div>
						<div className="userMessageItemM">
							<div className="userMessageLeft">
								<img
									src="/duty-free/Sources/recoUserImg.png"
									alt=""
									className="userMessageImg"
								/>
							</div>
							<div className="userMessageRight">
								<h3 className="userRealNick">Nickname </h3>
								<p className="responseMessage">Отклик на заказ</p>
								<p className="messageDesc">
									Добрый день, опишите, пожалуйста, подробнее, что бы вы хотели
									приобрести
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserMessages;
