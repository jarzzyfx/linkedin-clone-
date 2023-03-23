import React from 'react';
import './Widgets.css';
import  InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {


    const newsArticle = (heading, subtitle) => {
       return (
            <div className="widgets__article">
                <div className="widgets__articleleft">
                    <FiberManualRecordIcon className="muiSvgIcon"/> 
                </div>


                <div className="widgets__articleright">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>Linkedin news</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Elon musk has 200 billion dollars", "forbes news")}
        {newsArticle("Tesla stocks hit new highs on the stock market", "Trading view news letter")}
        {newsArticle("Nigeria presidential election is just around the corner, pvc is becoming scarce", "channels tv news page")}
        {newsArticle("WWE wrestler 'ROMAN REIGNS' becomes a double champion and seeks to extend his riegn on the brand", "international watch")}

    </div>
  )
}

export default Widgets