import { Link } from "react-router-dom";
import "./Analyze.css";
import "./AnalyzeResponsive.css";

const Analyze = () => {
	return (
		<>
			<div className="analyzeWrapper">
				<h4 className="adminWord">Admin</h4>
				<ul className="actions">
					<Link to={"/production"}>
						<li className="action-type">Продукция</li>
					</Link>
					<Link to={"/order"}>
						<li className="action-type">Заказы</li>
					</Link>
					<Link to={"/analyze"}>
						<li className="action-type onIt">Аналитика</li>
					</Link>
				</ul>

				<div className="analyzeBody">
					<h4 className="period">Период</h4>
					<div className="analyzeBodyWrap">
						<div className="analyzeBodyLeft">
							<div className="analyzeLeftInnerBody">
								{/* <input className="dateInput" type="date" placeholder="1" /> */}
								<div className="date-range-container">
									<input
										type="text"
										id="date-range"
										value="10.05.24 - 30.05.24"
										readOnly
									/>
									<div className="calendar-icon">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z"
												fill="#000000"
											/>
										</svg>
									</div>
								</div>
								<select className="analyzeSelect" name="" id="">
									<option value=""> Клиенты</option>
									<option value="">Заказы</option>
									<option value="">Продажи</option>
									<option value="">Финансы</option>
								</select>
							</div>
							<img
								src="/duty-free/Sources/calendarPicture.png"
								alt=""
								className="calendarImg"
							/>
						</div>
						<div className="analyzeBodyRight">
							<img
								src="/duty-free/Sources/chartPicture.png"
								alt=""
								className="chartPicture"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Analyze;
