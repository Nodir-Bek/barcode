

import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../../api';
import { Product } from '../../types';
import { Wrapper } from './style';
import Table, { TableColumn } from '@/components/table';
import { useDispatch, useShowModal } from '@/hooks';
import Form from './add';
import { useHideModal } from './../../hooks/useModal';
import { IoMdLogOut } from 'react-icons/io';
import { logout } from '@/redux/modules/auth';

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { showBlured } = useShowModal();
    const { hideModal } = useHideModal();
    const dispatch = useDispatch();
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const data = await getProducts();
        const productsWithIndex = data.map((product, index) => ({ ...product, index: index + 1 }));
        setProducts(productsWithIndex);
    };

    const handleAddProduct = async () => {
        showBlured({
            title: "Yangi maxsulot qo'shish",
            maxWidth: '600px',
            maxHeight: '600px',
            body: () => (
                <Form
                    refetchData={fetchProducts}
                    close={hideModal}
                />
            ),
        });
    };

    const handleDeleteProduct = async (id: number) => {
        await deleteProduct(id);
        fetchProducts();
    };
    const tableColumns: TableColumn<Product>[] = [
        {
            key: 'index',
            header: '#',
            accessor: 'index',
            align: 'center',
            width: '40px',
            minWidth: '40px',
            maxWidth: '40px',
        },
        {
            key: 'name',
            header: 'Maxsulot nomi',
            accessor: 'name',
            align: 'center',

        },
        {
            key: 'price',
            header: 'Namrxi',
            accessor: 'price',
            align: 'center',
        }, {
            key: 'id',
            header: 'Boshqaruv',
            accessor: (row) => <button onClick={() => handleDeleteProduct(row.id)}>Delete</button>,
            align: 'center',
        }
    ];
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <Wrapper>
            <button onClick={handleLogout} className="absolute top-5 right-5 bg-brandColor text-white py-2 px-4 rounded flex items-center gap-2">
                <IoMdLogOut size={27} /> Chiqish
            </button>
            <div className='flex flex-col justify-center items-center gap-6 w-full py-4 relative container'>
                <h1 className='text-3xl font-bold text-white'>Admin Dashboard</h1>
                <button onClick={handleAddProduct} className='absolute top-0 right-0 bg-brandColor text-white py-2 px-4 rounded'>Maxsulot qo'shish</button>
            </div>

            <div className='bg-white w-full h-96 p-6 rounded-lg z-50 text-black container'>
                <h2>Product List</h2>
                <Table data={products} columns={tableColumns} />
            </div>
        </Wrapper>
    );
};

export default Products;