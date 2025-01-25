import React, { Fragment, useState } from 'react'
import { Product } from '@/types';
import TextField from '@/components/input/input-with-icon';
import { addProduct } from '@/api';
import Barcode from 'react-barcode';

const AddProducts: React.FC<{ refetchData: () => void, close: () => void }> = ({ refetchData, close }) => {

  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({ name: '', barcode: '', price: 0 });
  const [barcodeImage, setBarcodeImage] = useState('');
  const form = [
    {
      label: 'Maxsulot nomi',
      name: 'name',
      value: newProduct.name,
      placeholder: 'Maxsulot nomi',
      type: 'text',
    },

    {
      label: 'Maxsulot narxi',
      name: 'price',
      value: newProduct.price,
      placeholder: 'Maxsulot narxi',
      type: 'number',
    }
  ];

  const handleGenerateBarcode = () => {
    setBarcodeImage(`${newProduct.name} | ${newProduct.price} sum`); // Barcode ni o'zgartiring
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=600,height=600');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Print Barcode</title>
            <style>
              body { font-family: Arial, sans-serif; }
              .barcode-container { text-align: center; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="barcode-container">
              <h1>Barcode</h1>
              <img src="${barcodeImage}" alt="Barcode" />
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };
  const handleAddProduct = async () => {
    await addProduct(newProduct);
    refetchData();
    close();
  }
  return (
    <div className='w-full bg-white rounded-lg p-6'>
      <h1 className='text-3xl font-bold text-black'>Maxsulot qo'shish</h1>
      <form onSubmit={(e) => e.preventDefault()} className='w-full flex flex-col justify-center items-center gap-5'>
        {form.map((input) => (
          <Fragment key={input.name}>
            <TextField
              label={input.label}
              name={input.name}
              value={input.value}
              placeholder={input.placeholder}
              type={input.type}
              onChange={(e) => setNewProduct({ ...newProduct, [e.target.name]: e.target.value })}
            />

          </Fragment>
        ))}
        {
          newProduct.price > 0 && newProduct.name && (
            <div className="flex w-full justify-center items-center gap-4">
              <button type="button" onClick={handleGenerateBarcode} className='bg-brandColor text-white hover:bg-brandColor/[0.8] font-bold py-3 px-6 w-full max-w-max rounded-tl-2xl rounded-br-2xl'>Bracode yaratish</button>

              {
                barcodeImage && (
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="bg-blue-500 text-white hover:bg-blue-600 font-bold py-3 px-6 w-full max-w-max rounded-tl-2xl rounded-br-2xl"
                  >
                    Chop etish
                  </button>
                )
              }
            </div>
          )
        }
        {barcodeImage && (
          <div className="mt-4">
            <Barcode value={barcodeImage} />
          </div>
        )}

        <div className='w-full flex justify-end items-center gap-5 '>
          <button onClick={close} className='bg-danger text-white hover:bg-danger/[0.8] font-bold py-3 px-6 w-full max-w-max rounded-tl-2xl rounded-br-2xl'>Bekor qilish</button>
          <button onClick={handleAddProduct} className='bg-brandColor text-white hover:bg-brandColor/[0.8] font-bold py-3 px-6 w-full max-w-max rounded-tl-2xl rounded-br-2xl'>Saqlash</button>
        </div>
      </form>

    </div>
  )
}

export default AddProducts