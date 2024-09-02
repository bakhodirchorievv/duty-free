import "./Order.css";
import "./OrderResponsive.css";

const Order = () => {
	return (
		<>
			<div className="firstOrderWrapper">
				<h4 className="adminWord">Admin</h4>
				<ul className="actions">
					<li className="action-type">Продукция</li>
					<li className="action-type onIt">Заказы</li>
					<li className="action-type">Аналитика</li>
				</ul>

				<ul className="orderTypes">
					<li className="orderType onIt">Текущие</li>
					<li className="orderType">Завершенные</li>
					<li className="orderType">Связь с клиентом</li>
				</ul>

				<ul className="orderInfos">
					<li className="orderInfo orderNumber">НОМЕР</li>
					<li className="orderInfo orderDate">ДАТА</li>
					<li className="orderInfo orderState">СТАТУС</li>
					<li className="orderInfo orderValue">СТОИМОСТЬ</li>
					<li className="orderInfo orderDetail">ДЕТАЛИ ЗАКАЗА</li>
				</ul>

				<ul className="orderRealInfos">
					<li className="orderRealInfo orderRealNumber redFont redUnderline">
						1234567890
					</li>
					<li className="orderRealInfo orderRealDate">25.05.2024</li>
					<li className="orderRealInfo orderRealState liHasOptions">
						<select className="stateSelect" name="" id="">
							<option value="">В процессе</option>
							<option value="">Ожидает получения</option>
							<option value="">Завершен</option>
						</select>
					</li>
					<li className="orderRealInfo orderRealValue">$40</li>
					<li className="orderRealInfo orderRealDetail redFont">Посмотреть</li>
				</ul>
			</div>

			<div className="secondOrderWrapper">
				<h4 className="adminWord">Admin</h4>
				<ul className="actions">
					<li className="action-type">Продукция</li>
					<li className="action-type onIt">Заказы</li>
					<li className="action-type">Аналитика</li>
				</ul>

				<ul className="orderTypes">
					<li className="orderType">Текущие</li>
					<li className="orderType">Завершенные</li>
					<li className="orderType onIt">Связь с клиентом</li>
				</ul>

				<div className="chatBody">
					<div className="chatLeft">
						<p className="orderChatNumber">
							Заказ{" "}
							<span className="orderRealNumber realNumberJust">
								№1234567890
							</span>
						</p>
						<p className="chatNumber">
							Обращение{" "}
							<span className="chatRealNumber realNumberJust">№001</span>
						</p>
					</div>

					<div className="chatRight">
						<div className="chatRightBody">
							<p className="orderNumberRight">
								Заказ{" "}
								<span className="orderRealNumber realNumberJust">
									№1234567890
								</span>
							</p>

							<div className="adminsMessage">
								<h4 className="adminChatWord">Admin</h4>
								<div className="realAdminMeassage"></div>
							</div>

							<div className="messageSendWrap">
								<p className="chatDesc">Обращение закрыто</p>
								<div className="messageTextWrap">
									<textarea
										className="messageInput"
										name=""
										id=""
										placeholder="Написать..."
									></textarea>
									<div>
										<img
											src="/duty-free/Sources/sendImage.png"
											alt=""
											className="sendImg"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Order;
