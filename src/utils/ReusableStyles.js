import { css } from 'styled-components';

export const imageZoomEffect = css`
	img {
		transition: 0.8s ease-in-out;
		&:hover {
			transform: scale(1.2);
		}
	}
`;

export const TitleStyles = css`
	.title {
		text-align: center;
		display: flex;
		flex-direction: column;
		font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
		gap: 2rem;
		margin-top: 64px;
		h1 {
			font-size: 2rem;
			text-transform: uppercase;
			span {
				color: #d88b33;
			}
		}
		.yellow {
			color: #d88b33;
		}
		p {
			/* padding: 0 10vw; */
			font-size: 1.1rem;
			line-height: 2rem;
			letter-spacing: 0.1rem;
		}
	}
	@media screen and (min-width: 260px) and (max-width: 1080px) {
		.title {
			gap: 1rem;
			h1 {
				font-size: 1.2rem;
			}
			p {
				padding: 0 1vw;
			}
		}
	}
`;
