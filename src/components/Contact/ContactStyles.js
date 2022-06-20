import styled from 'styled-components';

export const ContactWrapper = styled.footer`
	padding: 3rem 0;
	background: linear-gradient(to right, rgb(206, 133, 55), rgb(232, 129, 20));
	bottom: 0;
    margin-top: 64px;
`;

export const ContactContainer = styled.div`
	padding: 0 15px;
	margin: 0 auto;
	max-width: 1150px;
`;

export const ContactHeading = styled.h1`
	text-align: center;
	line-height: 0.5;
	color: #f7f7f7;
	letter-spacing: 1.2px;
	font-size: 45px;
	font-family: 'Playfair Display', serif;
	margin-bottom: 2rem;
	span {
		color: #23d997;
		letter-spacing: 1.2px;
		font-size: 45px;
	}

	@media screen and (max-width: 467px) {
		font-size: 35px;
	}

	@media screen and (max-width: 432px) {
		font-size: 20px;
		span {
			font-size: 20px;
		}
	}
`;
export const ContactItems = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 2rem;
	grid-row-gap: 6rem;
	margin-top: 3rem;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
		grid-column-gap: 0rem;
		grid-row-gap: 2rem;
	}

	.back .MuiSvgIcon-root {
		color: #f7f7f7;
		height: 40px;
		width: 40px;
		background: #1a1a1a;
		text-align: center;
		line-height: 40px;
		border-radius: 5px;
		transition: all 0.2s ease-in-out;
	}

	.back .MuiSvgIcon-root:hover {
		border: 1px solid #f7f7f7;
		transition: all 0.2s ease-in-out;
	}

	.contact_me {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.contact_me h2,
	.about__me h2 {
		font-size: 1.125rem;
		font-weight: 700;
		text-transform: uppercase;
		margin-left: 20px;
		color: '#222525';
		letter-spacing: 1.2px;
		font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
		margin-bottom: 25px;
		display: block;

		@media screen and (max-width: 570px) {
			margin-bottom: 15px;
		}
	}

	
	.phone,
	.mail {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}


	.contact_me .MuiSvgIcon-root {
		height: 30px;
		width: 30px;
		background: #1a1a1a;
		text-align: center;
		line-height: 40px;
		border-radius: 5px;
		color: #f7f7f7;
		transition: all 0.2s ease-in-out;
		margin-right: 10px;
	}

	.contact_me .MuiSvgIcon-root:hover {
		background: #282828;
		border: 1px solid rgb(206, 133, 55);
		transition: all 0.2s ease-in-out;
	}

	.contact_me span.text {
		line-height: 1.8;
		letter-spacing: 1px;
		font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
		font-size: 1.0625rem;
		font-weight: 500;
		padding-left: 10px;
		color: #f7f7f7;
		@media screen and (max-width: 467px) {
			font-size: 14px;
			letter-spacing: 0.8px;
		}
	}
	.contact_me a {
		font-size: 1.0625rem;
		font-weight: 500;
		padding-left: 10px;
		cursor: pointer;
		color: #f7f7f7;
		font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
		@media screen and (max-width: 467px) {
			font-size: 18px;
			letter-spacing: 0.8px;
		}
	}
	.about__me p {
		line-height: 1.8;
		letter-spacing: 1px;
		font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
		font-size: 1.0625rem;
		font-weight: 500;
		padding-left: 10px;
		color: #f7f7f7;
		@media screen and (max-width: 467px) {
			font-size: 14px;
			letter-spacing: 0.8px;
		}
	}

	.about__me p {
		line-height: 1.8;
		letter-spacing: 1px;
		font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';
		font-size: 1.0625rem;
		font-weight: 500;
		padding-left: 10px;
		color: #f7f7f7;
		@media screen and (max-width: 467px) {
			font-size: 14px;
			letter-spacing: 0.8px;
		}
	}

	.social_media {
		margin-top: 10px;
	}

	.social_media .MuiSvgIcon-root {
		height: 30px;
		width: 30px;
		background: #1a1a1a;
		text-align: center;
		line-height: 40px;
		border-radius: 5px;
		color: #f7f7f7;
		transition: all 0.2s ease-in-out;
		margin-right: 10px;
	}

	.social_media .MuiSvgIcon-root:hover {
		background: #282828;
		border: 1px solid rgb(206, 133, 55);
		transition: all 0.2s ease-in-out;
	}
`;

export const ContactCopyright = styled.div`
	display: flex;
	text-align: center;
	align-items: center;

	p {
		text-align: center;
		color: #282828;
		font-size: 1.0625rem;
		line-height: 1.8;
		letter-spacing: 1px;
		font-family: 'Made gentle', 'Trebuchet MS', 'sans-serif';

		@media screen and (max-width: 467px) {
			margin-top: 12px;
			text-align: center;
			font-size: 14px;
			letter-spacing: 0.8px;
		}
	}
`;
