import React from 'react'
import Layout from '../layouts/Layout'

const Mobil = () => {
  return (
    <>
      <Layout>
        <article className="p-4 bg-white rounded-lg shadow">
          <div className="bg-white border rounded-lg">
            <div className="flex justify-between items-center py-3 px-5 border-b">
              <h1 className="w-fit font-semibold text-2xl text-gray-800 ">
                Data Mobil
              </h1>
              <div>
                <button id="button-modal-tambah" className="py-1.5 px-5 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 active:bg-blue-700">
                  Tambah Data
                </button>
              </div>
            </div>
            {/* Table */}
            <div className="p-5">
              <div className="border rounded-md">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="">
                      <th scope="col" className="px-6 py-3 text-start font-medium text-gray-600 capitalize">No.</th>
                      <th scope="col" className="px-6 py-3 text-start font-medium text-gray-600 capitalize">Nama Mobil</th>
                      <th scope="col" className="px-6 py-3 text-start font-medium text-gray-600 capitalize">Harga</th>
                      <th scope="col" className="px-6 py-3 text-start font-medium text-gray-600 capitalize">Kursi</th>
                      <th scope="col" className="px-6 py-3 text-start font-medium text-gray-600 capitalize">Transmisi</th>
                      {/* <th className="text-start">Aksi</th> */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Avanza</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rp 50.000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">7</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Manual</td>
                    </tr>
                    <tr className="">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Avanza</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Rp 50.000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">7</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Matic</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  )
}

export default Mobil