import React from "react";

const Content = () => {
  return (
    <>
    <body class="bg-green-900 text-white">
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-amber-700 rounded-lg shadow-lg overflow-hidden text-center">
          <img src="/late.jpg" className="w-full h-48 object-cover" />
            <div class="p-5">
              <h5 className="text-2xl font-bold text-amber-300">ลาเต้</h5>
              <p className="mt-4 bg-green-500 text-white py-2 px-4 rounded">ราคา 75 บาท</p>
            </div>
        </div>

        <div class="bg-amber-700 rounded-lg shadow-lg overflow-hidden text-center">
          <img src="/americano.jpg" className="w-full h-48 object-cover" />
            <div class="p-5">
              <h5 className="text-2xl font-bold text-amber-300">อเมริกาโน่</h5>
              <p className="mt-4 bg-green-500 text-white py-2 px-4 rounded">ราคา 95 บาท</p>
            </div>
        </div>

        <div class="bg-amber-700 rounded-lg shadow-lg overflow-hidden text-center">
          <img src="/cappucino.jpg" className="w-full h-48 object-cover" />
            <div class="p-5">
              <h5 className="text-2xl font-bold text-amber-300">คาปูชิโน่</h5>
              <p className="mt-4 bg-green-500 text-white py-2 px-4 rounded">ราคา 125 บาท</p>
            </div>
        </div>

        <div class="bg-amber-700 rounded-lg shadow-lg overflow-hidden text-center">
          <img src="/mocha.jpg" className="w-full h-48 object-cover" />
            <div class="p-5">
              <h5 className="text-2xl font-bold text-amber-300">มอคค่า</h5>
              <p className="mt-4 bg-green-500 text-white py-2 px-4 rounded">ราคา 115 บาท</p>
            </div>
        </div>

        <div class="bg-amber-700 rounded-lg shadow-lg overflow-hidden text-center">
          <img src="/espresso.jpg" className="w-full h-48 object-cover" />
            <div class="p-5">
              <h5 className="text-2xl font-bold text-amber-300">เอสเพรสโซ่</h5>
              <p className="mt-4 bg-green-500 text-white py-2 px-4 rounded">ราคา 115 บาท</p>
            </div>
        </div>

        <div class="bg-amber-700 rounded-lg shadow-lg overflow-hidden text-center">
          <img src="/Caramel-Macchiato.jpg" className="w-full h-48 object-cover" />
            <div class="p-5">
              <h5 className="text-2xl font-bold text-amber-300">คาราเมล มัคคิอาโต้</h5>
              <p className="mt-4 bg-green-500 text-white py-2 px-4 rounded">ราคา 135 บาท</p>
            </div>
        </div>

        <div class="bg-amber-700 rounded-lg shadow-lg overflow-hidden text-center">
          <img src="/matcha.jpg" className="w-full h-48 object-cover" />
            <div class="p-5">
              <h5 className="text-2xl font-bold text-amber-300">ชาเขียวมัทฉะ</h5>
              <p className="mt-4 bg-green-500 text-white py-2 px-4 rounded">ราคา 95 บาท</p>
            </div>
        </div>

        <div class="bg-amber-700 rounded-lg shadow-lg overflow-hidden text-center">
          <img src="/thaitea.jpg" className="w-full h-48 object-cover" />
            <div class="p-5">
              <h5 className="text-2xl font-bold text-amber-300">ชาไทย</h5>
              <p className="mt-4 bg-green-500 text-white py-2 px-4 rounded">ราคา 65 บาท</p>
            </div>
        </div>
      </section>
    </body>
    </>
  );
};

export default Content;
