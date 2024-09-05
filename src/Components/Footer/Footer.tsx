import "./Footer.css";
import "./FooterResponsive.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
	const firstPages = [
		"/production",
		"/order",
		"/analyze",
		"/chatwithclient",
		"/catalog",
		"/catalogpro",
		"/moreinfo",
		"/oservice",
		"/currencyconvert",
		"/perfume",
		"/forher",
		"/alcohol",
		"/mainpage",
		"/search",
		"/",
	];

	// getting path name
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<div>
			<footer className="footer">
				<div className="foot-ul-wrap">
					{firstPages.includes(currentPath) ? (
						<ul className="footer-ul">
							<li className="footer-list">О НАС</li>
							<li className="footer-list">УСЛОВИЯ</li>
							<li className="footer-list">ВОПРОСЫ</li>
							<li className="footer-list">FAQS</li>
							<li className="footer-list">КОНТАКТЫ</li>
						</ul>
					) : currentPath === "/branddutyfree" ? (
						<ul className="footer-ul">
							<li className="footer-list">О ПРОЕКТЕ</li>
							<li className="footer-list">ROAD MAP</li>
							<li className="footer-list">FAQ</li>
							<li className="footer-list">КОНТАКТЫ</li>
						</ul>
					) : (
						<ul className="footer-ul">
							<li className="footer-list">ГЛАВНАЯ</li>
							<li className="footer-list">УСЛОВИЯ</li>
							<li className="footer-list">ВОПРОСЫ</li>
							<li className="footer-list">FAQS</li>
							<li className="footer-list">КОНТАКТЫ</li>
						</ul>
					)}
				</div>

				<p className="foot-bottom-text">
					Antonio Banderas | Armani | Biotherm | Boss | Burberry | Bvlgari |
					Calvin Klein | Chupa Chups | Dolce&Gabbana | Estée Lauder | Ferrero |
					Givenchy | Gucci | Helena Rubinstein | Juicy Fruit | Kenzo | L'Oreal |
					Lacoste | Lipton | Mentos | Montblanc | Moschino | Nutella | Paco
					Rabanne | Prada | Ritter Sport | Rot Front | Tom Ford | Wrigley's |
					Versace | Viktor&Rolf
				</p>
			</footer>
		</div>
	);
};

export default Footer;
