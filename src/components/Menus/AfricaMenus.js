import React from 'react';
import mafe from '../../images/0A-MAFE-2.jpg';
import thiebPoisson from '../../images/theb_poisson2.jpg';
import thiebPoulet from '../../images/thieb_poulet1.jpg';
import yassa from '../../images/yassa3.jpg';
import accra from '../../images/accra1.jpg';
import mafeveg from '../../images/mafé_veg.jpg';
import thiebveg from '../../images/thieb_veg.jpg';
import yasaveg from '../../images/yassa_veg.jpg';
import jusGimgembre from '../../images/0A-GIMGEMBRE-2.jpg';
import jusBissap from '../../images/0A-BISSAP-2.jpg';

import { Section } from './AfrcaMenuStyles';

export default function AfricaMenus() {
	const data = [
		{
			image: accra,
			name: 'Accras de morue',
			price: '6 pièces 5 €',
			description: 'Beignets de morue, herbes, épices',
		},
		{
			image: jusGimgembre,
			name: 'Jus de Gingembre',
			description: 'Gingembres, citrons, sucres et menthes',
			price: '2,50 €',
		},

		{
			image: jusBissap,
			name: 'Jus de Bissap',
			description: 'Hibiscus, citrons, sucres et menthes',
			price: '2,50 €',
		},
		{
			image: mafe,
			name: 'Mafé Poulet',
			price: '10 €',
			description: 'Poulet, sauce arachide, carottes, courgettes ,céleri',
		},
		{
			image: mafe,
			name: 'Mafé Boeuf',
			price: '12 €',
			description: 'Boeuf, sauce arachide, carottes, courgettes, céleri',
		},
		{
			image: yassa,
			name: 'Poulet Yassa',
			price: '10 €',
			description:
				'Poulet mariné, citrons, oignons, carottes, poivrons, moutarde',
		},	
		{
			image: thiebPoisson,
			name: 'Thieb Poisson',
			price: '12 €',
			description:
				'Riz cassé deux fois, cuit dans le jus des légumes, carottes, courgettes, aubergines et choux',
		},
		{
			image: thiebPoulet,
			name: 'Thieb Poulet',
			price: '10 €',
			description:
				'Riz cassé deux fois, cuit dans le jus des légumes, carottes, courgettes, aubergines et choux',
		},
	
		{
			image: thiebveg,
			name: 'Thieb Vegétarien',
			price: '8 €',
			description:
				'Riz cassé deux fois, cuit dans le jus des légumes, carottes, courgettes, aubergines et choux',
		},
		{
			image: mafeveg,
			name: 'Mafé Végétarien',
			price: '8 €',
			description: 'Sauce arachide, carottes, courgettes, céleri',
		},
		{
			image: yasaveg,
			name: 'Yassa Végetarien' , 
			price: '8 €',
			description:
				'Citrons, oignons, carottes, poivrons, moutarde',
		},	

				
	];

	return (
		<Section>
			<div className='title'>
				<h1>
					<span> Afrique</span> et <span>tradition</span>
				</h1>
			</div>
			<div className='products'>
				{data.map((product) => {
					return (
						<div className='product' key={product.name}>
							<div className='image'>
								<img src={product.image} alt='product' />
							</div>
							<h2>{product.name}</h2>
							<h3>{product.price}</h3>
							<p>{product.description}</p>
						</div>
					);
				})}
			</div>
		</Section>
	);
}
