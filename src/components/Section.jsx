import React from 'react'
import "./Section.css"
import image14 from "../assets/image 10.png";
import image15 from "../assets/image 11.png";
import image16 from "../assets/image 12.png";
import image17 from "../assets/image 13.png";


const Section = () => {
  return (
    <div>
        <h1 id="seven_2"className='seven'>We got it all...!!</h1>
        <div className='ten'>
            <div className='eleven'>
            <img className="twelve_2" src={image14} alt="" />
            </div>
            <div  className='twelve' >
                <h1 id="twelve_1" className='text3'>The Vintage</h1>
                <p id="thirteen_1" className='text4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
            </div>
        </div>
        <div className='ten'>
            <div className='twelve' >
                <h1 id="eighteen_1" className='text3'>The Vintage</h1>
                <p id="sixteen_1" className='text4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, incidunt? Maiores, sint enim error ea autem voluptas, officia soluta, placeat incidunt quae accusamus rerum magni voluptatum. Reprehenderit vel sint excepturi reiciendis! Incidunt i</p>
            </div>
            <div className='eleven'>
            <img className="twelve_2" src={image15} alt="" />
            </div>
        </div>
        <div className='ten'>
            <div className='eleven'>
            <img className="twelve_2" src={image16} alt="" />
            </div>
            <div className='twelve'>
                <h1 id="fourteen_1" className='text3'>The Vintage</h1>
                <p id="fifteen_1" className='text4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, incidunt? Maiores, sint enim error ea autem voluptas, officia soluta, placeat incidunt quae accusamus rerum magni voluptatum. Reprehenderit vel sint excepturi reiciendis! Incidunt.</p>
            </div>
        </div>
        <div className='ten'>
            <div className='twelve'>
                <h1 id="nineteen_1" className='text3'>The Vintage</h1>
                <p id="seventeen_1" className='text4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, incidunt? Maiores, sint enim error ea autem voluptas, officia soluta, placeat incidunt quae accusamus rerum magni voluptatum. Reprehenderit vel sint excepturi reiciendis! Incidunt.</p>
            </div>
            <div className='eleven'>
            <img className="twelve_2" src={image17} alt="" />
            </div>
        </div>
        <div className="nine_01">learn more</div>
    </div>
  )
}

export default Section