import React from 'react'
import HomeSlider from '../components/HomeSlider'
import chooseYourMeal1 from '../img/choose-your-meal1.png'
import unpackYourBox1 from '../img/unpack-your-box-1.png'
import cookCreateEnjoy1 from '../img/cook-create-enjoy-1.png'

function Home() {
  return (
    <main>
        <HomeSlider />
        <section className='mt-[180px]'>
            <div className='max-w-[1070px] mx-auto flex justify-center items-center'>
                <div className='w-1/2'>
                    <img src={chooseYourMeal1} className='rounded-[10px]' alt="" />
                </div>
                <div className='w-1/2 pl-[50px]'>
                    <h3 className='text-[#ff7f30] text-[36px] leading-[40px] font-bold DMSans'>CHOOSE YOUR MEALS</h3>
                    <p className='text-[16px] leading-[20px] mt-[20px] IBMPlex '>ท่านสามารถเลือกวัตถุดิบได้ด้วย ตัวของท่านเอง เลือกเลยอย่ารอช้า <br /> ทางเรามีสินค้ามากมายในท่านเลือกสรรอย่างไม่ขาดมือ</p>
                </div>
            </div>
        </section>

        <section className='mt-[80px]'>
            <div className='max-w-[1070px] mx-auto flex justify-center items-center'>
            <div className='w-1/2 '>
                    <h3 className='text-[#ff7f30] text-[36px] leading-[40px] font-bold DMSans'>UNPACK YOUR BOX</h3>
                    <p className='text-[16px] leading-[20px] mt-[20px] IBMPlex '>ท่านไม่ต้องกังวลเรื่องการขนส่ง เรามีบริการขนส่งระดับมืออาชีพ <br /> และมีการแพ็คใส่กล่องอย่างแน่นหนาไม่ต้องกังวลว่าสินค้าของท่าน <br />จะเกิดความเสียหายในการขนส่ง</p>
                </div>
                <div className='w-1/2'>
                    <img src={unpackYourBox1} className='ml-auto rounded-[10px]' alt="" />
                </div>
                
            </div>
        </section>

        <section className='mt-[80px] mb-[180px]'>
            <div className='max-w-[1070px] mx-auto flex justify-center items-center'>
                <div className='w-1/2'>
                    <img src={cookCreateEnjoy1} className='mr-0 rounded-[10px]' alt="" />
                </div>
                <div className='w-1/2 pl-[50px]'>
                    <h3 className='text-[#ff7f30] text-[36px] leading-[40px] font-bold DMSans'>COOK, CREATE, ENJOY</h3>
                    <p className='text-[16px] leading-[20px] mt-[20px] IBMPlex '>ท่านสามารถสร้างสรรค์เมนูเมนูของท่านเอง ได้ง่ายๆ โดยวัตถุดิบของเรา <br /> สนุกสนานไปกับการสร้างเมนูใหม่ๆ ที่ท่านอยากทานได้เลย</p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home