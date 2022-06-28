import React from 'react';
import dal from '../../images/dal.jpg';
import mafe from '../../images/mafé_veg.jpg';
import thiebPoisson from '../../images/thieb_veg.jpg';
import yassa from '../../images/yassa_veg.jpg';
import { Section } from './WorldMenuStyles';

export default function VegetarianMenus() {
	const data = [
		{
			image: mafe,
			name: 'Mafé Végétarien',
			price: '7 €',
			description: 'Sauce arachide, carottes, courgettes, céleris, coriandre',
		},
		{
			image: yassa,
			name: 'Yassa Végétarien',
			price: '7 €',
			description: 'Carottes, poivrons, citrons, oignons, moutarde',
		},
		{
			image: thiebPoisson,
			name: 'Thieb Végétarien',
			price: '7 €',
			description:
				'Riz cassé deux fois, cuit dans le jus des légumes, carottes, courgettes, aubergines et choux',
		},
		{
			image: dal,
			name: 'Dal',
			price: '7 €',
			description: 'Lentilles, butternut et lait de coco',
		},
	];
	return (
		<Section>
			<div className='title'>
				<h1>
					Plats <span> Végétariens</span>
				</h1>
			</div>
			<div className='products'>
				{data &&
					data.map((product) => {
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
