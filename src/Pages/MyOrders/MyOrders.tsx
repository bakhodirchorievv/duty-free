import "./MyOrders.css";
import "./MyOrdersResponsive.css";

const MyOrders = () => {
	return (
		<>
			<div className="myOrdersWrapper">
				<h2 className="myOrdersTitle">Мои заказы</h2>

				<div className="myOrdersHead">
					<h4 className="myOrdersHeadTitle allOrdersTitle onFocus">
						Все заказы
					</h4>
					<h4 className="myOrdersHeadTitle completedTitle">Завершенные</h4>
				</div>

				<div className="myOrdersBody">
					<div className="myOrdersLeft">
						<div className="myOrdersLeftItem itemOnFocus">
							<img
								src="/Sources/recoUserImg.png"
								alt=""
								className="myOrdersLeftImg"
							/>

							<div className="myOrdersLeftRight">
								<div className="nickAndOrder">
									<h3 className="myOrdersNick">Nickname</h3>
									<h3 className="myOrdersOrderNum">
										Заказ <span className="montserratFamily">№123</span>
									</h3>
								</div>
								<p className="myOrderDesc">Описание заказа</p>
								<p className="myOrderDesc seeDetail">Просмотреть детал</p>
							</div>
						</div>
						<div className="myOrdersLeftItem">
							<img
								src="/Sources/recoUserImg.png"
								alt=""
								className="myOrdersLeftImg"
							/>

							<div className="myOrdersLeftRight">
								<div className="nickAndOrder">
									<h3 className="myOrdersNick">Nickname</h3>
									<h3 className="myOrdersOrderNum">
										Заказ <span className="montserratFamily">№001</span>
									</h3>
								</div>
								<p className="myOrderDesc">Описание заказа</p>
								<p className="myOrderDesc seeDetail">Просмотреть детал</p>
							</div>
						</div>
					</div>

					<div className="myOrdersRight">
						<div className="myOrdersRightHead">
							<div>
								<img src="/Sources/fileImg.png" alt="" className="fileImg" />
							</div>
							<div className="myOrdersRightHeadRight">
								<div className="flexJustifyCenter">
									<h3 className="HeadrightTitle">
										Заказ <span className="montserratFamily">№123</span>
									</h3>
									<h3 className="HeadrightTitle">Nickname</h3>
								</div>
								<img
									src="/Sources/recoUserImg.png"
									alt=""
									className="HeadRightImg"
								/>
							</div>
						</div>

						<div className="chatHistory">
							<h4 className="chatHistoryTitle">Отклик на заказ</h4>

							<div className="chatHistoryBody">
								<div className="chatMessage adminChatMessage">
									Добрый день, опишите, пожалуйста, подробнее, что бы вы хотели
									приобрести
									<p className="messageTime">10:15 pm</p>
								</div>
								<div className="chatMessage userChatMessage">
									Здравствуйте, вот: <p className="messageTime">10:15 pm</p>
								</div>
								<div className="chatMessage adminChatMessage">
									Поняла, укажите дату и адрес, куда доставить товары. Либо же
									можем договориться о личной встрече
									<p className="messageTime">10:15 pm</p>
								</div>
								<button className="chatHistoryBtn">
									Выбрать этого исполнителя
								</button>
							</div>

							<div className="chatTextWrapper">
								<div className="textAreaRelative">
									<textarea
										name=""
										id=""
										className="myOrdersTextarea"
										placeholder="Написать..."
									></textarea>
									<div className="sendAndFile">
										<div className="uploadContainer">
											<input type="file" className="fileInput" />
											<img
												src="/Sources/uploadingImg.png"
												alt="Upload"
												className="myOrdersUpload"
											/>
										</div>
										<img
											src="/Sources/telegramImg.png"
											alt=""
											className="myOrdersSend"
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
								src="/Sources/topNavBarImg.png"
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
					<img src="/Sources/closeImg.png" alt="" className="navBarCloseImg" />
				</div>
			</div> */}
		</>
	);
};

export default MyOrders;
