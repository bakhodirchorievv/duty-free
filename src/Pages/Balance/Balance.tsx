import "./Balance.css";
import "./BalanceResponsive.css";

const Balance = () => {
	return (
		<>
			<div className="balanceWrapper">
				<h2 className="balanceTitle">Баланс</h2>

				<div className="balanceBody">
					<div className="balanceItem">
						<h4 className="balanceDesc">Доступный баланс</h4>
						<h3 className="balanceValue">0$</h3>
						<button className="balanceItemBtn">Пополнить</button>
					</div>
				</div>

				<div className="userLoginWrap">
					<div className="userLoginHead">
						<h3 className="userName">UserNickname</h3>
						<p className="userEmail">DutyFree@gmail.com</p>
					</div>

					<ul className="userLoginUl">
						<li className="userLoginItem">Настройки</li>
						<li className="userLoginItem loginFocus">Баланс</li>
						<li className="userLoginItem">Помощь</li>
						<li className="userLoginItem">Выход</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Balance;
