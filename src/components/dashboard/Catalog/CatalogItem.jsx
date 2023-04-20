import React from 'react';
import DataTable from 'react-data-table-component';

export const ServiceRow = () => {
    return (
        <div >
            Service
        </div>
    );
};

export const ServiceCard = () => {
    return (
        <div>
            Service
        </div>
    );
};

export const ProductRow = () => {
    return (
        <div >
            Product
        </div>
    );
};

export const ProductCard = ({ product, card_width = '200px', flex_override = 'column' }) => {
    return (
        <div className={`w-[${card_width}] flex flex-${flex_override}`}>
            <img src={product.image} alt="business logo" className='h-full w-full rounded-2' />
            <span>{product.name}</span>
        </div>
    );
};

export const CatalogCards = ({ catalog_list, card_width = '30%' }) => {
    return (
        <div className='pt-3 flex gap-3 align-items-start justify-content-center flex-row flex-wrap w-full h-auto'>
            {catalog_list.map(item => item.category === 'product' ? <ProductCard product={item} card_width={card_width} /> : <ServiceCard />)}
        </div>
    );
}

export const CatalogRows = ({ catalog_list }) => {
    const catalogData = catalog_list;

    const columns = [
        {
            name: 'Item',
            cell: row => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={row.image}
                        alt={row.item}
                        style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    />
                    {row.item}
                </div>
            ),
            sortable: true
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true
        },
        {
            name: 'Inventory',
            selector: row => row.inventory,
            sortable: true
        },
        {
            name: 'Vendor',
            selector: row => row.vendor,
            sortable: true
        },
        {
            name: 'Supplier',
            selector: row => row.supplier,
            sortable: true
        },
        {
            name: 'Manufaturer',
            selector: row => row.manufacturer,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => `$${row.price}`,
            sortable: true
        }
    ]

    return (
        <DataTable
            title="Inventory"
            columns={columns}
            data={catalogData}
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 15, 20]}
            paginationComponentOptions={{
                rowsPerPageText: 'Rows per page:',
                rangeSeparatorText: 'of',
                noRowsPerPage: false,
                selectAllRowsItem: true,
                selectAllRowsItemText: 'All'
            }}
            selectableRows
            expandableRows
            expandableRowsComponent={({ data: row }) => row.category === 'product' ? <ProductCard product={row} card_width={'100px'} flex_override={'row'} /> : <ServiceCard />}
        />
    );
}

const CatalogItem = ({ list_type, catalog_list, card_width }) => {
    return (
        <div>
            {list_type === 'row'
                ? <CatalogRows catalog_list={catalog_list} />
                : <CatalogCards catalog_list={catalog_list} card_width={card_width} />}
        </div>
    );
};

export default CatalogItem;
