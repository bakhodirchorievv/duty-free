import { Link } from "react-router-dom";
import "./Profile.css";
import "./ProfileResponsive.css";

const Profile = () => {
	return (
		<>
			<div className="profileWrapper">
				<div className="profileHead">
					<h3 className="profileHeadTitle settingOn">
						<span className="forUnderline">Профиль</span>
					</h3>

					<Link to={"/ContactInfo"}>
						<h3 className="profileHeadTitle">
							<span className="forUnderline">Контактная информация</span>
						</h3>
					</Link>
				</div>

				<div className="profileBody">
					<div className="profileBodyItem profileBodyItem1">
						<div className="profileItemLeft">
							<h3 className="profileItemTitle">Аватар</h3>

							<div className="profileItemBtns">
								<button className="profileItemBtn profileBtnFocus">
									Загрузить аватар
								</button>
								<button className="profileItemBtn">Удалить аватар</button>
							</div>
						</div>
						<div className="profileItemRight">
							<div className="file-upload-container">
								<input type="file" id="file-input" className="file-input" />
								<label htmlFor="file-input" className="file-label">
									<img
										src="/duty-free/Sources/cameraImg.png"
										alt="Upload"
										className="camera-icon"
									/>
								</label>
							</div>
						</div>
					</div>
					<div className="profileBodyItem profileBodyItem2">
						<h3 className="profileItemTitle">Имя и никнейм</h3>

						<div className="profileItemInputs">
							<div className="profileItemInputWrap">
								<p className="profileInputDesc">Ваш ник на сайте</p>
								<input
									type="text"
									className="profileItemInput"
									placeholder="Nickname"
								/>
							</div>
							<div className="profileItemInputWrap">
								<p className="profileInputDesc">Ваше имя</p>
								<input
									type="text"
									className="profileItemInput"
									placeholder="Имя"
								/>
							</div>
							<div className="profileItemInputWrap">
								<p className="profileInputDesc">Ваша фамилия</p>
								<input
									type="text"
									className="profileItemInput"
									placeholder="Фамилия"
								/>
							</div>
						</div>
					</div>
					<div className="profileBodyItem profileBodyItem2">
						<h3 className="profileItemTitle">О пользователе</h3>

						<div className="userInfoWrapper">
							<h4 className="infoOfUser">Информация о пользователе</h4>
							<textarea
								name=""
								id=""
								className="userInfotextArea"
								placeholder="Краткая информация о пользователе"
							></textarea>
						</div>
					</div>
					<div className="profileBodyItem profileBodyItem2">
						<h3 className="profileItemTitle">Основные направления</h3>

						<div className="countryOptions">
							<h3 className="chooseTitle">Выберите:</h3>

							<div className="chooseCountryWrap">
								<button className="countryname">Россия</button>
								<button className="countryname">Германия</button>
								<img
									src="/duty-free/Sources/plusMore.png"
									alt=""
									className="plusMoreSign"
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

export default Profile;
