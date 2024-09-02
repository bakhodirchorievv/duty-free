import "./Header.css";
import "./HeaderRespnsive.css";

const Header = () => {
	return (
		<div>
			<header className="header">
				<div className="header-left">
					<img
						src="/duty-free/Sources/HeadMainImg.png"
						alt=""
						className="headerMainImg"
					/>
					<div>
						<img
							src="/duty-free/Sources/Duty Free.png"
							alt=""
							className="headTitle"
						/>
					</div>
				</div>

				<ul className="header-list">
					<li className="header-item redFont">Главная</li>
					<li className="header-item">Каталог</li>
					<li className="header-item">Парфюмерия</li>
					<li className="header-item">Алкоголь</li>
				</ul>

				{/* <div className="header-right">
					<img
						src="/duty-free/Sources/HeadSearchImg.png"
						alt=""
						className="headRightImgs"
					/>
					<img
						src="/duty-free/Sources/HeadCartImg.png"
						alt=""
						className="headRightImgs"
					/>
					<img
						src="/duty-free/Sources/HeadContactImg.png"
						alt=""
						className="headRightImgs"
					/>
				</div> */}

				<div className="header-right-login">
					<button className="loginBtn">Вход</button>
					<button className="loginBtn redBack">Регистрация</button>
				</div>
			</header>
		</div>
	);
};

export default Header;
