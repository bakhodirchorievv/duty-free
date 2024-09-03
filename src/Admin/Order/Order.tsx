import "./Order.css";
import "./OrderResponsive.css";

const Order = () => {
	// const openArrow = document.querySelector(".arrowOpen") as HTMLImageElement;
	// const closeArrow = document.querySelector(".arrowClose") as HTMLImageElement;
	// const handleBlur = () => {
	// 	openArrow.classList.remove("getNone");
	// 	closeArrow.classList.add("getNone");
	// 	console.log("blured");
	// };
	// const handleFocus = () => {
	// 	openArrow.classList.add("getNone");
	// 	closeArrow.classList.remove("getNone");
	// };

	const handleBlur = () => {
		const openArrow = document.querySelector(".arrowOpen") as HTMLImageElement;
		const closeArrow = document.querySelector(
			".arrowClose"
		) as HTMLImageElement;
		if (openArrow && closeArrow) {
			openArrow.classList.remove("getNone");
			closeArrow.classList.add("getNone");
			closeArrow.classList.remove("getBlock");
			console.log("blurred");
		}
	};

	const handleFocus = () => {
		const openArrow = document.querySelector(".arrowOpen") as HTMLImageElement;
		const closeArrow = document.querySelector(
			".arrowClose"
		) as HTMLImageElement;
		console.log(openArrow, closeArrow);
		if (openArrow && closeArrow) {
			openArrow.classList.add("getNone");
			closeArrow.classList.remove("getNone");
			closeArrow.classList.add("getBlock");
		}
	};
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
						<div
							onFocus={handleFocus}
							onBlur={handleBlur}
							className="stateSelectWrap"
						>
							<select className="stateSelect" name="" id="">
								<option value="">В процессе</option>
								<option value="">Ожидает получения</option>
								<option value="">Завершен</option>
							</select>
							<img
								src="/duty-free/Sources/arrowOpen.svg"
								alt=""
								className="stateSelectArrows arrowOpen"
							/>
							<img
								src="/duty-free/Sources/arrowCloseRed.svg"
								alt=""
								className="stateSelectArrows arrowClose"
							/>
						</div>
					</li>
					<li className="orderRealInfo orderRealValue">$40</li>
					<li className="orderRealInfo orderRealDetail redFont">Посмотреть</li>
				</ul>
			</div>
		</>
	);
};

export default Order;
