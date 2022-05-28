import React from 'react';
import accra from '../../images_png/0A-ACCRA-2.png';
import chili from '../../images_png/chili.png';
import pouletAnanas from '../../images_png/3.png';
import colombo from '../../images_png/6.png';
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
