import './slider.css';
function Slider(){
return(

<>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://learn.g2.com/hubfs/iStock-984796804.jpg" className="d-block w-100 height-400" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://multiable.com.sg/wp-content/uploads/2020/06/iStock-1051616786-2048x1365.jpg" className="d-block w-100 height-400" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2021/05/10/eCommerce.jpeg" className="d-block w-100 height-400 "  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>

    
);
}
export default Slider;