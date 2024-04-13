import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
  let imgarr = ["https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg", "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg", "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"];

  let mwbtb = ["https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/4/71a69cc9-210a-4a95-b37f-78319c8f33761691141606256-image_png2064277310.png", "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/ccebd3fc-3628-4eb5-9604-5487049c2cff1691142886405-image_png356438875.png", "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/6366f7f4-3942-4cbc-af0d-3b63c0f9add71691142685532-image_png45885503.png", "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/7abcde7c-18e5-44c5-9cd9-c1490daa842a1691142533559-image_png2078004791.png"]

  let sbc=["https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg","https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/a50c2dec-c5bc-46f3-b754-294fb46c61971690787339077-Shop-By-Category_HP-4_05.jpg","https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/bfab4827-0ea6-4a5b-8b8d-167d497ae78e1690787339167-Shop-By-Category_HP-4_03.jpg","https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c61cfcfb-749f-4d8e-a318-0ea8f8705a1c1690787339442-Shop-By-Category_HP-4_04.jpg","https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/da4059bf-14f1-4928-b5b9-be8719887b8e1690787339149-Shop-By-Category_HP-4_06.jpg","https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/84870fc6-4805-41a4-b9eb-a8d7adb6c0d21690787339128-Shop-By-Category_HP-4_08.jpg","https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/84870fc6-4805-41a4-b9eb-a8d7adb6c0d21690787339128-Shop-By-Category_HP-4_08.jpg","https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/c61cfcfb-749f-4d8e-a318-0ea8f8705a1c1690787339442-Shop-By-Category_HP-4_04.jpg","https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg","https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0dedd7c2-6c01-4ab0-a907-8928e56066d41690787339184-Shop-By-Category_HP-4_02.jpg"]
  return (
    <>
      <Carousel data-bs-theme="dark">
        {imgarr.map((imgitem) => <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgitem}
            alt="First slide"
          />
        </Carousel.Item>)}
      </Carousel>
      <section className='carousel2'>
      <h2>MEDAL WORTHY BRANDS TO BAG</h2>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className="imgitem">
            {mwbtb.map((imgitem) =>
              <img
                className='w-10'
                src={imgitem}
                alt="First slide"
              />
            )}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgitem">
            {mwbtb.map((imgitem) =>
              <img
                className='w-10'
                src={imgitem}
                alt="First slide"
              />
            )}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgitem">
            {mwbtb.map((imgitem) =>
              <img
                className='w-10'
                src={imgitem}
                alt="First slide"
              />
            )}
          </div>
        </Carousel.Item>
      </Carousel>
      </section>
      <section className='carousel2'>
      <h2>GRAND GLOBAL BRANDS</h2>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div className="imgitem">
            {mwbtb.map((imgitem) =>
              <img
                className='w-10'
                src={imgitem}
                alt="First slide"
              />
            )}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgitem">
            {mwbtb.map((imgitem) =>
              <img
                className='w-10'
                src={imgitem}
                alt="First slide"
              />
            )}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imgitem">
            {mwbtb.map((imgitem) =>
              <img
                className='w-10'
                src={imgitem}
                alt="First slide"
              />
            )}
          </div>
        </Carousel.Item>
      </Carousel>
      </section>
      <section className="sbc">
        {sbc.map((imgitem)=><img
            src={imgitem}
          />)}
      </section>
    </>

  )
}

export default Home