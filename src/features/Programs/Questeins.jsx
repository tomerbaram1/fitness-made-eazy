import React from "react";
import "./questeins.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Questeins() {
  return (
    <div className="questein-swiper">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <h1 className="swiperTitle">
            Is this program suitable for Beginners?
          </h1>
          <span className="swiperText">
            No. If you are still in your first year or two of training, Id
            recommend running my Fundamentals Program first. After that, Id
            suggest running at least one of my Push Pull Legs or Upper/Lower
            Program before moving onto this routine. This program is designed
            for intermediate-advanced trainees who have seen a stall past the
            newbie phase.
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiperTitle">Is this program suitable for women?</h1>
          <span className="swiperText">
            Yes! Anyone who is looking to build BOTH muscular size and strength
            will benefit from this program. This program will build all the
            muscles of the entire body proportionally. If you’re looking for a
            little more focus on lower body or glutes, you can{" "}
            <span className="orange">
              check out my Women’s Specialization Program or Glute Hypertrophy
              Program.
            </span>
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiperTitle">
            I can’t squat, bench press or deadlift. Can I still run the program?
          </h1>
          <span className="swiperText">
            If you’re able to do two of the three lifts, it is possible for you
            to tweak the program to fit your needs. For example, if you can
            squat and deadlift but can’t bench press, you could replace the
            bench work in this program with dips, dumbbell press, smith-machine
            press or machine chest press and run the rest of the program as is.
            If you can squat and bench press but can’t deadlift, you could
            replace the deadlift work with hip thrusts and/or lower back
            extensions. If you can bench press and deadlift but can’t squat, you
            could replace the squat work with front squats, hack squats or leg
            press. <br />
            However, because one of the main objectives of this program is to
            increase strength on the Big Three lifts, if you’re unable to
            perform any of those lifts, this is not the best program for you at
            this time. I suggest you consider running one of my{" "}
            <span className="orange">other programs instead.</span> Feel free to
            try my free program selector to find which program is best for you.
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiperTitle">
            Is this program suitable for Beginners?
          </h1>
          <span className="swiperText">
            No. If you are still in your first year or two of training, Id
            recommend running my Fundamentals Program first. After that, Id
            suggest running at least one of my Push Pull Legs or Upper/Lower
            Program before moving onto this routine. This program is designed
            for intermediate-advanced trainees who have seen a stall past the
            newbie phase.
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiperTitle">
            How many days a week will I be in the gym?
          </h1>
          <span className="swiperText">
            There are two different versions of the program. A four times per
            week option and a five-six times per week option. Simply choose the
            version that best suits your schedule and let the gains take care of
            themselves.
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiperTitle">
            Do I need access to a gym? Can I run the program with a home gym?
          </h1>
          <span className="swiperText">
            You only need a power rack, barbell, bench and (ideally) some
            dumbbells to run this program. Because there are exercise
            substitutions included for every exercise, you can run this program
            with basic lifting equipment and can tailor it to fit your
            situation. To run the program exactly as written (without any
            substitutions) however, you would need gym access as there are a few
            cable and machine exercises included as well. If you have any other
            questions, please feel free to reach out to my coaching support team
            at any time.
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiperTitle">
            Ready to start my powerbuilding system?
          </h1>
          <span className="orange">GO FOR ITT</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
