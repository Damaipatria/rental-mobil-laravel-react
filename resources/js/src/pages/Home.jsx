import React from 'react'
import Layout from '../layouts/Layout'

const data = [
  {
    judul: 'Mobil 1',
    gambar: 'https://picsum.photos/id/111/200/300',
    deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sint commodi eos perferendis, deserunt asperiores magnam aspernatur qui.',
    harga: 100000
  },
  {
    judul: 'Mobil 2',
    gambar: 'https://picsum.photos/id/111/200/300',
    deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sint commodi eos perferendis, deserunt.',
    harga: 120000
  },
  {
    judul: 'Mobil 3',
    gambar: 'https://picsum.photos/id/111/200/300',
    deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    harga: 570000
  },
  {
    judul: 'Mobil 4',
    gambar: 'https://picsum.photos/id/111/200/300',
    deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sint commodi eos perferendis.',
    harga: 890000
  },
]

const Home = () => {
  return (
    <>
      <Layout>
        <section >
          <div className="-mt-20 mb-10">
            <div className="absolute z-10 w-full h-screen flex justify-start items-center lg:px-32 px-5">
              <div className="lg:basis-2/3 basis-full">
                <h1 className="mb-7 font-bold lg:text-5xl text-4xl text-white">Spesialis Rental Mobil</h1>
                <p className="lg:mb-20 mb-16 font-light text-xl text-white lg:text-left text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae debitis reiciendis iste soluta atque laborum inventore alias adipisci tempore velit nisi saepe enim quam cupiditate sit et ex, sapiente voluptas.</p>
                <button className="py-3 px-5 font-medium text-white bg-blue-600">
                  <a className="flex items-center gap-2" href="/sewa-mobil">
                    <p className="">
                      Rental Sekarang
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </button>
              </div>
            </div>
            <img src="/assets/header_image.jpg" alt="" className="w-full h-screen brightness-[.6]" />
          </div>

          <div>
            <h2 className="mb-7 lg:px-0 px-2 font-bold lg:text-3xl text-2xl text-center">Mobil Paling Laris dan Terbaik <br /> yang Kami Miliki</h2>
            <div className="flex lg:gap-5 gap-2 lg:px-20 px-2">
              {data.map((item, index) => {
                return (
                  <div key={index} className="lg:basis-1/4 basis-1/2 p-2 bg-white border rounded-md drop-shadow-lg transition duration-300 hover:scale-105 hover:border-blue-500">
                    <figure className="flex items-center ">
                      <img src={item.gambar} alt={item.judul} className="w-full h-60" />
                    </figure>
                    <div className="mb-1 lg:px-3 px-0">
                      <p className="font-semibold text-xl">{item.judul}</p>
                    </div>
                    <div className="flex gap-5 mb-4 lg:px-3 px-0">
                      <div className="inline-flex items-center gap-2 text-gray-600">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>
                        </i>
                        <p className="text-md font-light">4 Kursi</p>
                      </div>
                      <div className="inline-flex items-center gap-2 text-gray-600">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        </i>
                        <p className="font-light text-md capitalize">Manual</p>
                      </div>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-between items-end mb-2 lg:px-3 px-0">
                      <p className="font-bold text-2xl">{item.harga}</p>
                      <button className="inline-flex items-center gap-1 py-1 px-4 font-bold text-md text-blue-500 bg-">
                        Sewa
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                          <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Home