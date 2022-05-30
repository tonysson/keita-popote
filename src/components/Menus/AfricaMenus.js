import React from 'react';
import mafe from '../../images/0A-MAFE-2.jpg';
import thiebPoisson from '../../images/0A-THEIB-POISSON-2.jpg';
import thiebPoulet from '../../images/0A-THIEB.jpg';
import yassa from '../../images/0A-YASA-2.jpg';
import atieke from '../../images/atieke.jpg';
import { Section } from './AfrcaMenuStyles';

export default function AfricaMenus() {
	const data = [
		{
			image: mafe,
			name: 'Mafé',
			price: '9 €',
			description: 'Poulet , Sauce arachide , carottes , courgettes et choux',
		},
		{
			image: thiebPoisson,
			name: 'Thieb Poisson',
			price: '12 €',
			description:
				'Riz cassé deux fois , cuits dans le jus des legumes , carottes , courgettes , aubergines et choux',
		},
		{
			image: thiebPoulet,
			name: 'Thieb Poulet',
			price: '9 €',
			description:
				'Riz cassé deux fois , cuits dans le jus des legumes , carottes , courgettes , aubergines et choux',
		},
		{
			image: yassa,
			name: 'Poulet Yassa',
			price: '9 €',
			description:
				'Poulet mariné , citrons , oignons , carottes , poivrons , moutarde',
		},
		{
			image: atieke,
			name: 'Attiéké Poisson',
			price: '10 €',
			description: 'Semoule de manioc , alloco et légumes sautés',
		},
		{
			image: atieke,
			name: 'Attiéké Poulet',
			price: '9 €',
			description: 'Semoule de manioc , alloco et légumes sautés',
		},
	];
	return (
		<Section>
			<div className='title'>
				<h1>
					Plats <span> Afrique</span> et <span>tradition</span>
				</h1>
			</div>
			<div className='products'>
				{data.map((product) => {
					return (
						<div className='product' key={product.name}>
							<div className='image'>
								<img  src={product.image} alt='product'  />
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

