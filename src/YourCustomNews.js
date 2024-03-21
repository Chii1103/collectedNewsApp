import "./YourCustomNews.scss";

const Medias = [
  {
    mediaName: "New York Times",
    topNewsImg: "../img/NewyorkTimes.jpg",
    buttonMessage: "to the article page",
  },
  {
    mediaName: "TechCrunch",
    topNewsImg: "../img/news4.jpg",
    buttonMessage: "to the article page",
  },
  {
    mediaName: " Wall Street Journal",
    topNewsImg: "../img/news2.jpg",
    buttonMessage: "to the article page",
  },
  {
    mediaName: "U.S. News",
    topNewsImg: "../img/news3.jpg",
    buttonMessage: "to the article page",
  }
];

const Article = ({mediaName,topNewsImg,buttonMessage}) => {
  return (
    <div className="articleWrap">
          <p className="mediaName">{mediaName}</p>
          <img src={topNewsImg} />
          <button className="toArticleBtn">{buttonMessage}</button>
        </div>
      )
 
};

const YourCustomNews = () =>{
  return(
    <div className='yourCustomNewsWrap'>
      {Medias.map((media,idx)=> (
     <Article key={idx} {...media}/>
      ))}
 
    </div>
  )
}
export default YourCustomNews;
