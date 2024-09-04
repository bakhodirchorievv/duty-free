import "./RealProfile.css";
import "./RealProfileResponsive.css";

const RealProfile = () => {
	return (
		<>
			<div className="realProfileWrap">
				<div className="realProfileBody">
					<h3 className="realProfileTitle">Профиль</h3>

					<div className="realProfileContent">
						<div className="profileContentHead">
							<div className="contentHeadLeft">
								<img
									src="/duty-free/Sources/recoUserImg.png"
									alt=""
									className="realProfileMainImg"
								/>
							</div>
							<div className="contentHeadRight">
								<h3 className="realProfileUserName">Nickname</h3>
								<img
									src="/duty-free/Sources/realStars.svg"
									alt=""
									className="realProfileGoldStar"
								/>
								<p className="realProfileUserInfo">
									<img
										src="/duty-free/Sources/realClockIcon.svg"
										alt=""
										className="realProfileClock"
									/>
									<span className="montserratFamily">&gt;1 </span>года на
									сервисе
								</p>
							</div>
						</div>

						<h3 className="realProfileAddress realProfileGTitle">
							Основные направления:{" "}
							<span className="realProLighter">Россия, Германия</span>
						</h3>

						<h3 className="aboutRealProUser realProfileGTitle">
							О пользователе{" "}
						</h3>

						<p className="shortInfoORealUser">
							Краткая информация, которую напишет пользователь
						</p>

						<div className="realProfileFootHead">
							<h3 className="realProfileReview realProfileGTitle">Отзывы</h3>
							<div className="realProfileSelectWrap">
								<select name="" id="" className="realProfileSelect">
									<option value="">Сначала новые</option>
								</select>
								<img
									src="/duty-free/Sources/arrowOpen.svg"
									alt=""
									className="arrowOpenRealProfile"
								/>
							</div>
						</div>

						<div className="realProfileUsers">
							<div className="realProfileUser">
								<div className="realProfileUserLeft">
									<img
										src="/duty-free/Sources/topNavBarImg.png"
										alt=""
										className="realProfileUserImg"
									/>
								</div>
								<div className="realProfileUserRight">
									<h4 className="realProfileFootTitle">User</h4>
									<div className="orderStarWrap">
										<h4 className="realProfileOrderNum">
											Заказ <span className="montserratFamily">№123</span>
										</h4>
										<img
											src="/duty-free/Sources/realFullStars.svg"
											alt=""
											className="realProGoldStar"
										/>
									</div>
									<p className="realOrderSrok">
										Все доставлено в срок, отличный продавец
									</p>
								</div>
							</div>
							<div className="realProfileUser hasBorderTop">
								<div className="realProfileUserLeft">
									<img
										src="/duty-free/Sources/topNavBarImg.png"
										alt=""
										className="realProfileUserImg"
									/>
								</div>
								<div className="realProfileUserRight">
									<h4 className="realProfileFootTitle">User</h4>
									<div className="orderStarWrap">
										<h4 className="realProfileOrderNum">
											Заказ <span className="montserratFamily">№123</span>
										</h4>
										<img
											src="/duty-free/Sources/realFullStars.svg"
											alt=""
											className="realProGoldStar"
										/>
									</div>
									<p className="realOrderSrok">
										Все доставлено в срок, отличный продавец
									</p>
								</div>
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
						<li className="userLoginItem loginFocus">Профиль</li>
						<li className="userLoginItem">Настройки</li>
						<li className="userLoginItem">Помощь</li>
						<li className="userLoginItem">Выход</li>
					</ul>
				</div> */}
			</div>
		</>
	);
};

export default RealProfile;
