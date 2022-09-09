import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import "./articales.css";
import { Button } from "@mui/material";
import ArticalesHeader from "./ArticalesHeader";
export default function TitlebarImageList() {
  return (
    <>
      <ArticalesHeader></ArticalesHeader>
      <div className="artical-container">
        <div className="artical-img-section">
          {/* <h1>
          ITS NOT ONLY LOOKING GOOD<br></br>
          <span className="imgsection-title">ITS THE WAY OF LIFE...</span>
        </h1> */}
          {/* <img
          className="modal-image"
          src="https://jeffnippard.com/wp-content/uploads/2020/06/About-Jeff-Nippard.png"
        ></img> */}
        </div>
        <div className="artical-section-container">
          <ImageList sx={{ width: 500, height: 450 }}>
            {/* <ImageListItem key="Subheader" cols={2}>
            <ListSubheader className="article-container-header" component="div">
              <h1 className="artical-header">OUR ARTICLES</h1>
            </ListSubheader>
          </ImageListItem> */}
            {itemData.map((item) => (
              <ImageListItem className="article-images" key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="articaleOverlay"></div>
                <div>
                  <h1 className="articaleTitle">{item.title}</h1>
                  <Button className="readMoreButton">Read More</Button>
                </div>

                <ImageListItemBar
                // className="artical-img-itembar"
                // title={item.title}
                // actionIcon={
                //   <IconButton
                //     sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                //     aria-label={`info about ${item.title}`}
                //   >
                //     <a
                //       href={item.link}
                //       target="_blank"
                //       rel="noopener noreferrer"
                //     >
                //       💪
                //     </a>
                //   </IconButton>
                // }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  );
}

const itemData = [
  {
    img: "https://cdn.pixabay.com/photo/2014/06/23/19/35/fitness-375472_960_720.jpg",
    title: "IS LIFTING HARMFUL TO YOU",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
    link: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/weight-training/art-20047116",
  },
  {
    img: "https://www.out-sport.eu/wp-content/uploads/2018/05/Schermata-2018-06-19-alle-11.07.32-800x563.png",
    title: "WILL RUNNING RUIN YOUR MUSCLE GAINS",
    author: "@rollelflex_graphy726",
    link: "https://www.betterhealth.vic.gov.au/health/healthyliving/running-and-jogging-health-benefits",
  },
  {
    img: "https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/strong-brunette-doing-shoulder-press.jpg?itok=Nw6spkO0",
    title: "HOW TO MAINTAIN A HEALTHY LIFT STYLE",
    author: "@helloimnik",
    link: "https://www.nytimes.com/section/health",
  },
  {
    img: "https://english.cdn.zeenews.com/sites/default/files/2015/09/10/408007-workout.jpg",
    title: "THE BEST WAY TO MAINTAIN YOUR DIET WHILE TRAINING",
    author: "@nolanissac",
    cols: 2,
    link: "https://www.helpguide.org/articles/healthy-eating/healthy-eating.htm",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/08/10/23/36/street-workout-2628919_960_720.jpg",
    title: "BEST FULL BODY WORKOUT",
    author: "@hjrc33",
    cols: 2,
    link: "https://www.muscleandstrength.com/workouts/muscle-strength-full-body-workout-routine",
  },
  {
    img: "https://breakingmuscle.com/wp-content/uploads/2022/07/shutterstock_425076214.jpg",
    title: "IS SQUAT BAD FOR YOUR KNEES",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4262933/",
  },
  {
    img: "https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_960_720.jpg",
    title: "SHOULD YOU DO YOGA",
    author: "@tjdragotta",
    link: "https://www.health.harvard.edu/staying-healthy/yoga-benefits-beyond-the-mat",
  },
  {
    img: "https://cdn.pixabay.com/photo/2015/08/26/20/31/man-909049_960_720.jpg",
    title: "HOW DOES SLEEP EFFECT YOUR MUSCLE GAINS",
    author: "@katie_wasserman",
    link: "https://www.sleepfoundation.org/physical-activity/athletic-performance-and-sleep",
  },
  {
    img: "https://cdn.pixabay.com/photo/2012/11/28/11/11/football-67701_960_720.jpg",
    title: "HOW TO PLAY SPORTS AND GAIN MUSCLE",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
    link: "https://www.betterhealth.vic.gov.au/health/healthyliving/sports-and-physical-activity",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/09/18/14/21/swimmer-1678307_960_720.jpg",
    title: "SHOULD YOU SWIM FOR MUSCLE GROW",
    author: "@shelleypauls",
    link: "https://www.betterhealth.vic.gov.au/health/healthyliving/swimming-health-benefits",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/02/18/06/57/glass-1206584_960_720.jpg",
    title: "HOW WILL WATER EFFECT YOUR MUSCLES",
    author: "@peterlaster",
    link: "https://www.gomacro.com/benefits-of-drinking-water/",
  },
  {
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/08/fit-woman-air-bike-HIIT-workout.jpg?quality=82&strip=1",
    title: "SHOULD YOU DO CARDIO",
    author: "@southside_customs",
    cols: 2,
    link: "https://www.medicalnewstoday.com/articles/327474",
  },
];
