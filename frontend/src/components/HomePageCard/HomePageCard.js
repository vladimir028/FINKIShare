

export default function HomePageCard({imgSrc, cardTitle, cardContent, linkContent}){
    return (
        <div className="card" style={{width : '17rem', height: '24rem', border: 'none'}}>
  <img src={imgSrc} className="card-img-top" alt="..." style={{width: '70%', height: '50%', alignSelf: 'center', padding: '3em'}}/>
  <div className="card-body">
    <h5 className="card-title" style={{textAlign: 'center'}}>{cardTitle}</h5>
    <p className="card-text"  style={{textAlign: 'center'}}>{cardContent}</p>
    {/* <span style={{alignSelf: 'center'}}><a href="#" className="btn btn-primary">{linkContent}</a> </span> */}
  </div>
</div>
    );
}