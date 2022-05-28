import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * @description Allow us to scroll on top any time we go to some page
 */
const ScrollTop = () => {
	const { key } = useLocation();
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
		});
	}, [key]);
	return null;
};

export default ScrollTop;
