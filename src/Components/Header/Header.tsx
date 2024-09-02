import "./Header.css";
import "./HeaderRespnsive.css";

const Header = () => {
	const handleHeadPages = (e: any) => {
		const headItems = document.querySelectorAll(
			".header-item"
		) as NodeListOf<HTMLLIElement>;
		headItems.forEach((headItem) => (headItem.className = "header-item"));

		e.target.classList.add("redFont");
	};

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
					<li onClick={handleHeadPages} className="header-item redFont">
						Главная
					</li>
					<li onClick={handleHeadPages} className="header-item">
						О нас
					</li>
					<li onClick={handleHeadPages} className="header-item">
						Условия
					</li>
					<li onClick={handleHeadPages} className="header-item">
						Вопросы
					</li>
					<li onClick={handleHeadPages} className="header-item">
						Контакты
					</li>
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
