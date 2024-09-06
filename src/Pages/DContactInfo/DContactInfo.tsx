import { Link } from "react-router-dom";
import "./DContactInfo.css";
import "./DContactInfoResponsive.css";

const DContactInfo = () => {
	return (
		<>
			<div className="contactWrapper">
				<div className="contactHead">
					<Link to={"/dprofile"}>
						<h3 className="contactHeadTitle">
							<span className="forUnderline">Профиль</span>
						</h3>
					</Link>

					<h3 className="contactHeadTitle settingOn">
						<span className="forUnderline">Контактная информация</span>
					</h3>
				</div>

				<div className="contactBody">
					<div className="contactBodyItem contactBodyItem2">
						<h3 className="contactItemTitle">Email</h3>

						<div className="contactItemInputs">
							<div className="contactItemInputWrap">
								<p className="contactInputDesc contactMbMore">
									Email используется для авторизации. Изменить его нельзя
								</p>
								<input
									type="text"
									className="contactItemInput longerInput"
									placeholder="DutyFree@gmail.com"
								/>
							</div>
						</div>
					</div>

					<div className="contactBodyItem contactBodyItem2">
						<h3 className="contactItemTitle">Страна и город</h3>

						<div className="contactItemInputs">
							<div className="contactItemInputWrap">
								<input
									type="text"
									className="contactItemInput"
									placeholder="Страна"
								/>
							</div>
							<div className="contactItemInputWrap">
								<input
									type="text"
									className="contactItemInput"
									placeholder="Город"
								/>
							</div>
						</div>
					</div>

					<div className="contactBodyItem contactBodyItem2">
						<h3 className="contactItemTitle">Номер телефона</h3>

						<div className="contactItemInputs">
							<div className="contactItemInputWrap">
								<input
									type="text"
									className="contactItemInput"
									placeholder="Номер"
									value={"+7 (___) __-__"}
								/>
							</div>
							<div className="contactItemInputWrap">
								<button className="contactConfirmBtn">Подтвердить</button>
							</div>
						</div>
					</div>

					<div className="contactBodyItem contactBodyItem2">
						<h3 className="contactItemTitle">Изменить пароль</h3>

						<div className="contactItemInputs">
							<div className="contactItemInputWrap">
								<p className="contactInputDesc">Старый пароль</p>
								<input
									type="text"
									className="contactItemInput"
									placeholder="Старый пароль"
								/>
							</div>
							<div className="contactItemInputWrap">
								<p className="contactInputDesc">Новый пароль</p>
								<input
									type="text"
									className="contactItemInput"
									placeholder="Новый пароль"
								/>
							</div>
							<div className="contactItemInputWrap">
								<p className="contactInputDesc">Подтверждение</p>
								<input
									type="text"
									className="contactItemInput"
									placeholder="Новый пароль"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="userLoginWrap">
					<div className="userLoginHead">
						<h3 className="userName">UserNickname</h3>
						<p className="userEmail">DutyFree@gmail.com</p>
					</div>

					<ul className="userLoginUl">
						<li className="userLoginItem loginFocus">Настройки</li>
						<li className="userLoginItem">Баланс</li>
						<li className="userLoginItem">Помощь</li>
						<li className="userLoginItem">Выход</li>
					</ul>
				</div> */}
			</div>
		</>
	);
};

export default DContactInfo;
