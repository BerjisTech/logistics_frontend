import React from 'react';
import { CatalogItem } from '../../../components';
import { faker } from '@faker-js/faker';

const Catalog = () => {
  const renderCatalogItems = () => {
    const catalogItems = [];

    for (let index = 0; index < 100; index++) {
      catalogItems.push(
        {
          item: faker.commerce.productName(),
          name: faker.commerce.productName(),
          category: index % 2 === 0 ? 'product' : 'product',
          status: 'John Doe',
          inventory: 60,
          vendor: 'self',
          supplier: 'self',
          manufacturer: 'Mfg Co LTD',
          price: 200,
          image: `https://picsum.photos/500/300?random=${index}`
        }

      );
    }

    return catalogItems;
  };

  return (
    <div>
      Catalog
      <CatalogItem list_type={'row'} catalog_list={renderCatalogItems()} />
    </div>
  );
};

export default Catalog;
