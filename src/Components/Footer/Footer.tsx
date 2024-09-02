import "./Footer.css";
import "./FooterResponsive.css";

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="foot-ul-wrap">
					<ul className="footer-ul">
						<li className="footer-list">О нас</li>
						<li className="footer-list">Условия</li>
						<li className="footer-list">Вопросы</li>
						<li className="footer-list">FAQs</li>
						<li className="footer-list">Контакты</li>
					</ul>
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
