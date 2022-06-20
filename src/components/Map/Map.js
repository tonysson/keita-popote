import React from 'react';
import "./Map.css"
const AddressMap = () => {
	return (
		<div className='google-maps'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.4635426182244!2d2.0852624157757362!3d49.00176557930174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e68a955db7fe4f%3A0xb1e5d91fb10e0974!2s5%20Rue%20de%20Jouvence%2C%2078700%20Conflans-Sainte-Honorine!5e0!3m2!1sfr!2sfr!4v1655717295616!5m2!1sfr!2sfr'
				width='380'
				height='220'
				style={{ border: 0 }}
				allowFullScreen=''
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
                title='MyMap'
			/>
		</div>
	);
};
export { AddressMap };
