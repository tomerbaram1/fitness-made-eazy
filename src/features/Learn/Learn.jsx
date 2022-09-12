import React from "react";
import "./learn.css";
import Navbar from "../../core/Navbar/Navbar";
import ActionAreaCard from "./LearnCard";
import LearnTemplate from "./LearnTemplate";

import { useSelector } from "react-redux";

const Learn = () => {
  const selectedProgram = useSelector((state) => state.selectedProgram.value);
  console.log(selectedProgram);

  return (
    <div>
      <Navbar></Navbar>
      {selectedProgram === "" ? <LearnTemplate></LearnTemplate> : <div />}
      {selectedProgram === "Power Lifting" ? (
        <LearnTemplate
          background="1"
          img="1"
          overlay="overlay"
          overlay2="1"
          title1="PUSH"
          title2="PULL"
          title3="LEGS"
        ></LearnTemplate>
      ) : (
        <div />
      )}
      {selectedProgram === "Calisthenics" ? (
        <LearnTemplate
          background="2"
          img="2"
          overlay="overlay2"
          overlay2="2"
          title1="UP"
          title2="AND"
          title3="AWAY"
        ></LearnTemplate>
      ) : (
        <div />
      )}
      {selectedProgram === "Fundementals" ? (
        <LearnTemplate
          background="3"
          img="3"
          overlay="overlay3"
          overlay2="3"
          title1="BACK"
          title2="TO"
          title3="BASICS"
        ></LearnTemplate>
      ) : (
        <div />
      )}
      {selectedProgram === "Women's Specialization Program" ? (
        <LearnTemplate
          background="4"
          img="4"
          overlay="overlay4"
          overlay2="4"
          title1="WOMEN"
          title2="SPECIAL"
          title3="ADION"
        ></LearnTemplate>
      ) : (
        <div />
      )}
      {selectedProgram === "Full Body Workout" ? (
        <LearnTemplate
          background="5"
          img="5"
          overlay="overlay5"
          overlay2="5"
          title1="NO PAIN"
          title2="NO"
          title3="GAIN"
        ></LearnTemplate>
      ) : (
        <div />
      )}
      {selectedProgram === "Lower Body Workout" ? (
        <LearnTemplate
          background="6"
          img="6"
          overlay="overlay6"
          overlay2="6"
          title1="GET"
          title2="STRONGER"
          title3="LEGS"
        ></LearnTemplate>
      ) : (
        <div />
      )}
      {selectedProgram === "Upper Body Workout" ? (
        <LearnTemplate
          background="7"
          img="7"
          overlay="overlay3"
          overlay2="3"
          title1="GET"
          title2="STRONGER"
          title3="AND BIG"
        ></LearnTemplate>
      ) : (
        <div />
      )}
      {selectedProgram === "Core" ? (
        <LearnTemplate
          background="8"
          img="8"
          overlay="overlay1"
          overlay2="1"
          title1="GET"
          title2="YOUR"
          title3="ABS"
        ></LearnTemplate>
      ) : (
        <div />
      )}
      {selectedProgram === "Crossfit" ? (
        <LearnTemplate
          background="9"
          img="9"
          overlay="overlay2"
          overlay2="2"
          title1="GET"
          title2="FIT"
          title3="QUICK"
        ></LearnTemplate>
      ) : (
        <div />
      )}

      <div className="card-container1">
        {selectedProgram === "Power Lifting" ? (
          <ActionAreaCard
            title="Powerlifting: The Beginner’s Guide (2022)"
            text2="Low rep sets seem to signal for muscle growth mainly through mechanical tension, whereas high reps sets likely signal for growth primarily through metabolic stress. Because of this, if you only use one rep range in your training, you are seriously limiting your hypertrophic potential. Because this program blends rep ranges in the 1-5 zone, 6-12 zone and 12-20 zone, you will maximize muscle growth through each and every growth pathway."
            text={
              "At some point, you’ve probably seen some dude come into the gym—he probably had a beard—load up a barbell with 45-lb. plates that the steel was literally bending, and sent shockwaves of awesomeness across the floor with some of the most impressive squats you’ve ever witnessed in person."
            }
          />
        ) : (
          <div />
        )}
        {selectedProgram === "Calisthenics" ? (
          <ActionAreaCard
            title="What is calisthenics?"
            text2="Calisthenics originated in Ancient Greece and remains popular today. Most people can perform these exercises, regardless of the level of their athletic ability. Many of them do not require any equipment."
            text="Calisthenics is a type of workout that uses a person’s body weight with little or no equipment The exercises involve movements that use large muscle groups, such as pushups. People typically perform these exercises at a moderate pace. They help to improve coordination, flexibility, and strength."
          />
        ) : (
          <div />
        )}
        {selectedProgram === "Fundementals" ? (
          <ActionAreaCard
            title="Fundamental Exercises that will Get you Fit and Strong"
            text2="in this program we will go over the most basic and important fundamentals there is"
            text="Health is wealth. We all desire to be healthy, fit and disease-free. This allows us to work and play comfortably with no aches and pains ruining the experience. There are many ways to maintain health. Examples are a good diet, consuming supplements and exercise. A variety of clothing, devices and facilities have been developed to help us exercise. Not only does this keep our bodies healthy and strong, it eliminates stess. As a result, our minds and bodies enjoy a state of tranquility. Some exercises have a bigger impact than others. They target large muscle groups and bring about the most gains per repetition. Here are 11 workout exercises that will give you the biggest bang for the buck."
          />
        ) : (
          <div />
        )}
        {selectedProgram === "Women's Specialization Program" ? (
          <ActionAreaCard
            title="Women's Specialization fitness Program"
            text2="The Women's Fitness Specialization (WFS) gives you the ability to confidently design and adjust fitness programming for your female clientele regardless of their stage of life"
            text="From adolescence to pre-and post-pregnancy, busy schedules to physical limitations, everybody is different, and every fitness need is just as unique. That's why we've created a program that's perfectly aligned with your female clients' demands and individual needs."
          />
        ) : (
          <div />
        )}
        {selectedProgram === "Full Body Workout" ? (
          <ActionAreaCard
            title="Muscle & Strength Full Body Workout"
            text2="Many bodybuilding greats (including the likes of Arnold Schwarzenegger and Steve Reeves) used them to build the foundation of their lean muscle mass."
            text="This M&S mass building routine is perfect for lifters who want to give full body workouts a try. All major muscle groups are trained, and the program includes a 20 rep set of squats."
          />
        ) : (
          <div />
        )}
        {selectedProgram === "Lower Body Workout" ? (
          <ActionAreaCard
            title="Lower Body Workouts That Get Results"
            text2="It’s often said that you shouldn’t skip a leg day. Leg workouts are important for several reasons, yet they are sometimes neglected in favor of upper-body workouts."
            text="Add strength, stability and endurance to the lower body for better quality of life and improved sports performance."
          />
        ) : (
          <div />
        )}
        {selectedProgram === "Upper Body Workout" ? (
          <ActionAreaCard
            title="Upper Body Workouts That Get Results"
            text2="The Best Upper Body Workout Plan: Pack On Lean Size Across Your Torso"
            text="Do you want to add a serious amount of lean muscle mass in just 28 days? Then you’ve come to the right place because this four-week, 16-session upper body workout plan will do exactly that by pushing your body harder than it’s ever been pushed before. After all, getting out of your comfort zone and doing something you’ve not done before is the key to making rapid progress."
          />
        ) : (
          <div />
        )}
        {selectedProgram === "Core" ? (
          <ActionAreaCard
            title="GET YOUR SELF ABS  LIKE WE HAVE"
            text2="Your core muscles are mobilized in flexion, extension, rotation, abdominal bracing, pelvic tilting, and even the way your shoulder blades move,” certified personal trainer Brian Abarca, CPT, owner of Abarca Fitness in New Jersey, tells SELF. “People usually think of abs when referring to the core, but our core is actually made up of a much more complex network of muscles found in the trunk of our body.”."
            text="Although you may think of your “core” only when you’re doing specific abs moves, you actually use these muscles all day, every day—which is why core exercises are so important. Whether you’re walking, reaching, balancing, getting up from a chair, or simply just standing upright, the muscles of your midsection are firing to keep you stable and supported in nearly every movement."
          />
        ) : (
          <div />
        )}
        {selectedProgram === "Crossfit" ? (
          <ActionAreaCard
            title="CrossFit Overview: Systematic Review and Meta-analysis"
            text2="Thirty-one articles were included in the systematic review and four were included in the meta-analysis. However, only two studies had a high level of evidence at low risk of bias. Scientific literature related to CrossFit has reported on body composition, psycho-physiological parameters, musculoskeletal injury risk, life and health aspects, and psycho-social behavior. In the meta-analysis, significant results were not found for any variables."
            text="Systematic searches of the PubMed, Web of Science, Scopus, Bireme/MedLine, and SciELO online databases were conducted for articles reporting the effects of CrossFit training. The systematic review followed the PRISMA guidelines. The Oxford Levels of Evidence was used for all included articles, and only studies that investigated the effects of CrossFit as a training program were included in the meta-analysis. For the meta-analysis, effect sizes (ESs) with 95% confidence interval (CI) were calculated and heterogeneity was assessed using a random-effects model."
          />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Learn;
