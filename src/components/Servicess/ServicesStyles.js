import styled from 'styled-components';
import { TitleStyles } from '../../utils/ReusableStyles';

export const Section = styled.section`
	padding: 0 15px;
	margin: 0 auto;
	max-width: 1152px;
	${TitleStyles};
	.services {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5vw;
		margin-top: 4rem;
		.service {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1.5vw;
			padding: 0 3vw;
			img {
				height: 2.8rem;
			}
			p {
				text-align: center;
				font-size: 1rem;
				line-height: 2rem;
				letter-spacing: 0.1rem;
				font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
				font-weight: 500;
			}
			.phone {
				display: flex;
				text-align: center;
				align-items: center;
				.MuiSvgIcon-root {
					height: 30px;
					width: 30px;
					background: #1a1a1a;
					text-align: center;
					line-height: 40px;
					border-radius: 5px;
					color: #ffff;
					transition: all 0.2s ease-in-out;
					margin-right: 10px;
				}
				a {
					font-size: 1.0625rem;
					font-weight: 500;
					padding-left: 10px;
					cursor: pointer;
					color: #fc4958;
					font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
					@media screen and (max-width: 467px) {
						font-size: 14px;
						letter-spacing: 0.8px;
					}
				}
			}
			button {
				padding: 0.6rem 3rem;
				letter-spacing: 0.2rem;
				border-radius: 2rem;
				font-size: 1.1rem;
				border: none;
				color: white;
				background-color: #fc4958;
				transition: 0.3s ease-in-out;
				&:hover {
					background-color: #f9c74f;
				}
			}
		}
		.yellow {
			button {
				background-color: #f9c74f;
				&:hover {
					background-color: #fc4958;
				}
			}
		}
	}
	@media screen and (min-width: 260px) and (max-width: 1080px) {
		.services {
			grid-template-columns: 1fr;
			gap: 12vw;
		}
	}
`;
