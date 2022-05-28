import { imageZoomEffect, TitleStyles } from '../../utils/ReusableStyles';
import styled from 'styled-components';

export const Section = styled.section`
	padding: 0 15px;
	margin: 0 auto;
	max-width: 1152px;
	${TitleStyles};
	.products {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 3rem;
		margin-top: 3rem;
		.product {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			align-items: center;
			h3 {
				color: #e87321;
				font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
				font-weight: 900;
			}
			h2 {
				font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
				font-weight: 700;
			}
			p {
				text-align: center;
				font-size: 1rem;
				line-height: 2rem;
				letter-spacing: 0.1rem;
				font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
				font-weight: 500;
			}
			${imageZoomEffect};
			.image {
				max-height: 25rem;
				overflow: hidden;
				border-radius: 1rem;
				img {
					height: 20rem;
					width: 15rem;
					object-fit: cover;
				}
			}
		}
	}

	@media screen and (min-width: 280px) and (max-width: 720px) {
		.products {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}
	}
	@media screen and (min-width: 720px) and (max-width: 1080px) {
		.products {
			grid-template-columns: repeat(2, 1fr);
		}
	}
`;
