import React from 'react';
//import accra from '../../images/accra1.jpg';
import chili from '../../images/chili.jpg';
import pouletAnanas from '../../images/poulet_ananas3.jpg';
import colombo from '../../images/colombo1.jpg';
import atieke from '../../images/attièké_poisson.jpg';

import { Section } from './WorldMenuStyles';

export default function WorldMenus() {
	const data = [
		{
			image: atieke,
			name: 'Attieké Poisson',
			price: '13 €',
			description: 'Semoule de manioc, poisson , légumes sautés , Alloco ',
		},
		{
			image: chili,
			name: 'Chili Con Carne',
			price: '10 €',
			description: 'Viande hachée, haricots rouges, poivrons, maïs et épices',
		},
		{
			image: colombo,
			name: 'Colombo',
			price: '11 €',
			description:
				'Poulet, pates de colombo , courgettes, aubergines et lait de coco',
		},
		{
			image: pouletAnanas,
			name: 'Poulet Ananas',
			price: '10 €',
			description:
				'Poulet, ananas, curry, lait de coco, poivrons et citrons',
		},
	];
	return (
		<Section>
			<div className='title'>
				<h1>
				<span> Plats</span> uniquement sur <span>Demande 5 minimum</span>
				</h1>
			</div>
			<div className='products'>
				{data.map((product) => {
					return (
						<div className='product' key={product.name}>
							<div className='image'>
								<img
									style={{ height: '20rem', width: '15rem' }}
									src={product.image}
									alt='product'
								/>
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
