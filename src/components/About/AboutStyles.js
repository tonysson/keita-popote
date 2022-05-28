import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Hide = styled.div`
	overflow: hidden;
`;
export const AboutContainer = styled(motion.div)`
	padding: 0 15px;
	margin: 0 auto;
	max-width: 1152px;
`;

export const AboutWrapper = styled.div`
	padding: 3rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 1024px) {
		padding-top: 8rem;
	}
	@media screen and (max-width: 960px) {
		flex-direction: column;
		overflow: hidden;
	}
`;
export const Description = styled.div`
	flex: 1;
	z-index: 2;
	/* margin-left: 2rem; */
	margin-top: -5rem;
	h6 {
		font-size: 1.6rem;
		color: #23d997;
		margin-bottom: 0.5rem;
		font-family: 'Playfair Display', serif;
		letter-spacing: 1.2px;
	}

	h1 {
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.2;
		margin-bottom: 2rem;
		color: #ffff;
	}

	h1 span {
		color: #23d997;
	}

	p {
		line-height: 1.9;
		margin-bottom: 2rem;
		color: #ffff;
		font-size: 22px;
		letter-spacing: 1.2px;
		font-family: 'Poppins', sans-serif;
		@media screen and (max-width: 467px) {
			font-size: 18px;
			letter-spacing: 0.8px;
		}
	}

	@media screen and (max-width: 960px) {
		h6 {
			display: flex;
			align-items: center;
			text-align: center;
			justify-content: center;
			/* display: inline-block */
		}
		h1 {
			font-size: 2rem;
			display: flex;
			align-items: center;
			text-align: center;
			justify-content: center;
			display: inline-block;
		}

		p {
			display: flex;
			align-items: center;
			text-align: center;
			justify-content: center;
		}
	}
`;

export const Visit = styled(motion.div)`
	flex: 1;
	display: flex;
	z-index: 2;
	justify-content: center;

	@media screen and (max-width: 960px) {
		margin-top: 2rem;
	}
`;
