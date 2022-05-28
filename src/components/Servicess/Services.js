import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import Services1 from '../../images_png/Services1.png';
import Services2 from '../../images_png/Services2.png';
import logo from '../../images_png/service3.png';
import { Section } from './ServicesStyles';


export default function Services() {
	return (
		<Section id='services'>
			<div className='title'>
				<h1>
					Cuisine <span> familiale</span> et de <span> qualité</span>
				</h1>
			</div>
			<div className='services'>
				<div className='service'>
					<img
						src={logo}
						alt='service'
					/>
					<p>
						Keita Popote traiteur africain propose des plats à emporter.
						<br />
						Tous les vendredis et samedis de 18h à 20h.
						<br />
						Possibilité de commander en nombres pour des évenements
						particuliers.
					</p>
				</div>
				<div className='service'>
					<img src={Services2} alt='service' />
					<p>
						Passez votre commande soit par SMS, soit en appelant les mercredis,
						jeudis et vendredis au
					</p>
					<div className='phone'>
						<PhoneIcon />
						<a href='tel: +337 64 46 32 76'>07 64 46 32 76</a>
					</div>
				</div>
				<div className='service yellow'>
					<img src={Services1} alt='service' />
					<p>Récuperez votre commande Vendredi et Samedi de 18h00 à 20h.</p>
				</div>
			</div>
		</Section>
	);
}

