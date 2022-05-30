import React from 'react';
import accra from '../../images/0A-ACCRA.jpg';
import chili from '../../images/chili.jpg';
import pouletAnanas from '../../images/0A-POULET-ANANAS-2.jpg';
import colombo from '../../images/0A-POULET-COLOMBO-2.jpg';
import { Section } from './WorldMenuStyles';

export default function WorldMenus() {
	const data = [
		{
			image: accra,
			name: 'Accras de morue',
			price: '4 €',
			description: '5 pièces , Beignets frits à la morue , herbes , épices',
		},
		{
			image: chili,
			name: 'Chili Con Carne',
			price: '9 €',
			description: 'Viande hachée , haricots rouge , poivrons , maïs et épices',
		},
		{
			image: colombo,
			name: 'Colombo',
			price: '9 €',
			description:
				'Poulet , épices , anis étoilé , courgettes , aubergines et lait de coco',
		},
		{
			image: pouletAnanas,
			name: 'Poulet Ananas',
			price: '9 €',
			description:
				'Poulet , ananas , curry , lait de coco , poivrons et citrons',
		}
	];
	return (
		<Section>
			<div className='title'>
				<h1>
				Plats	<span>Du Monde</span>
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
