import "./DMyOrders.css";
import "./DMyOrdersResponsive.css";

const DMyOrders = () => {
	return (
		<>
			<div className="DmyOrdersWrapper">
				<h2 className="DmyOrdersTitle">Мои заказы</h2>

				<div className="DmyOrdersHead">
					<div className="divBorderBottom onFocus">
						<h4 className="DmyOrdersHeadTitle allOrdersTitle">Все заказы</h4>
					</div>
					<div className="divBorderBottom">
						<h4 className="DmyOrdersHeadTitle completedTitle">Завершенные</h4>
					</div>
				</div>

				<div className="DmyOrdersBody">
					<div className="DmyOrdersLeft">
						<div className="DmyOrdersLeftItem itemOnFocus">
							<img
								src="/duty-free/Sources/topNavBarImg.png"
								alt=""
								className="DmyOrdersLeftImg"
							/>

							<div className="DmyOrdersLeftRight">
								<div className="nickAndOrder">
									<h3 className="DmyOrdersNick">User</h3>
									<h3 className="DmyOrdersOrderNum">
										Заказ <span className="montserratFamily">№123</span>
									</h3>
								</div>
								<p className="DmyOrderDesc">Описание заказа</p>
								<p className="DmyOrderDesc seeDetail">Просмотреть детал</p>
							</div>
						</div>
						<div className="DmyOrdersLeftItem">
							<img
								src="/duty-free/Sources/topNavBarImg.png"
								alt=""
								className="DmyOrdersLeftImg"
							/>

							<div className="DmyOrdersLeftRight">
								<div className="nickAndOrder">
									<h3 className="DmyOrdersNick">User</h3>
									<h3 className="DmyOrdersOrderNum">
										Заказ <span className="montserratFamily">№001</span>
									</h3>
								</div>
								<p className="DmyOrderDesc">Описание заказа</p>
								<p className="DmyOrderDesc seeDetail">Просмотреть детал</p>
							</div>
						</div>
					</div>

					<div className="DmyOrdersRight">
						<div className="DmyOrdersRightHead">
							<div>
								<img
									src="/duty-free/Sources/fileImg.png"
									alt=""
									className="fileImg"
								/>
							</div>
							<div className="DmyOrdersRightHeadRight">
								<div className="DflexJustifyCenter">
									<h3 className="HeadrightTitle">
										Заказ <span className="montserratFamily">№123</span>
									</h3>
									<h3 className="HeadrightTitle">User</h3>
								</div>
								<img
									src="/duty-free/Sources/topNavBarImg.png"
									alt=""
									className="HeadRightImg"
								/>
							</div>
						</div>

						<div className="DchatHistory">
							<h4 className="chatHistoryTitle">Вы откликнулись на заказ</h4>

							<div className="chatHistoryBody">
								<div className="DchatMessage DadminChatMessage">
									Добрый день, опишите, пожалуйста, подробнее, что бы вы хотели
									приобрести
									<p className="messageTime">10:15 pm</p>
								</div>
								<div className="DchatMessage DuserChatMessage">
									Здравствуйте, вот: <p className="messageTime">10:15 pm</p>
								</div>
								<div className="DchatMessage DadminChatMessage">
									Поняла, укажите дату и адрес, куда доставить товары. Либо же
									можем договориться о личной встрече
									<p className="messageTime">10:15 pm</p>
								</div>

								<p className="chatSecondDesc">
									Заказчик выбрал Вас в качестве исполнителя
								</p>
								<button className="chatHistoryBtn">Завершить заказ</button>
							</div>

							<div className="chatTextWrapper">
								<div className="textAreaRelative">
									<textarea
										name=""
										id=""
										className="DmyOrdersTextarea"
										placeholder="Написать..."
									></textarea>
									<div className="sendAndFile">
										<div className="uploadContainer">
											<input type="file" className="fileInput" />
											<img
												src="/duty-free/Sources/uploadingImg.svg"
												alt="Upload"
												className="DmyOrdersUpload"
											/>
										</div>
										<img
											src="/duty-free/Sources/telegramImg.svg"
											alt=""
											className="DmyOrdersSend"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="topNavBarWrap">
				<div className="topPerNavBar">
					<div className="topBarBody">
						<div className="topBarLeft">
							<img
								src="/duty-free/Sources/topNavBarImg.png"
								alt=""
								className="topNavBarImg"
							/>
						</div>
						<div className="topBarRight">
							<h3 className="topBarTitle">User</h3>
							<p className="topBarDesc">
								Сумма заказа: <span className="montserratFamily">20$</span>{" "}
							</p>
							<p className="topBarDesc">
								Доставка: <span className="lighterWeight">до адреса</span>
							</p>
						</div>
					</div>
					<div className="navBarFoot">
						<h4 className="navBarFootTitle">О заказе</h4>
						<p className="navBarFootdesc">
							Краткая информация, которую напишет пользователь
						</p>
					</div>
					<img src="/duty-free/Sources/closeImg.png" alt="" className="navBarCloseImg" />
				</div>
			</div> */}
		</>
	);
};

export default DMyOrders;
