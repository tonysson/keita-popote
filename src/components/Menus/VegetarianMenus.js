import React from 'react';
import mafe from '../../images_png/2.png';
import yassa from '../../images_png/10.png';
import thiebPoisson from '../../images_png/7.png';
import dal from '../../images_png/dal2.png';
import { Section } from './WorldMenuStyles';

export default function VegetarianMenus() {
	const data = [
		{
			image: mafe,
			name: 'Mafé Végétarien',
			price: '7 €',
			description: 'Le mafé avec les légumes sans le poulet',
		},
		{
			image: yassa,
			name: 'Yassa Végétarien',
			price: '7 €',
			description: 'Les légumes du Yassa sans la viande',
		},
		{
			image: thiebPoisson,
			name: 'Thieb Végétarien',
			price: '7 €',
			description: 'Le riz du thieb avec les légumes',
		},
		{
			image: dal,
			name: 'Dal',
			price: '7 €',
			description: 'Lentilles , butternut et lait de coco',
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
