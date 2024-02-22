'use client'
import React from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
// -- ANIMATION ---
import { useEffect } from 'react'
// AOS.init()

type Props = {}

const About = ({}: Props) => {
  // ANIMATION FUNCTION
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <section className="mx-auto container 2xl:max-w-[1200px] min-[1700px]:max-w-[1536px] flex flex-col gap-12 mb-[5rem]">
        {/* //about us  */}
        <div className="flex flex-col gap-4">
          <h2
            className="mt-[3rem]  md:mt-[5.5rem]  mb-3 md:mb-10 text-[48px] font-bold w-full text-center md:text-left gradients"
            data-aos="zoom-in"
            data-aos-delay="10"
            data-aos-duration="1000"
          >
            About Us
          </h2>
          <blockquote
            className="md:text-[18px] text-[14px] leading-normal font-normal text-white text-left  p-5 md:p-0"
            data-aos="zoom-in-up"
            data-aos-delay="10"
            data-aos-duration="1000"
          >
            E-cell SATI Vidisha, a student-run organization, dedicated to
            promoting entrepreneurship and fostering a culture of innovation and
            creativity. Our E-cell aims to provide a platform for aspiring
            entrepreneurs to learn, ideate, innovate, and transform their ideas
            into successful ventures. We&apos;re here to nurture the potential
            of young minds to be an entrepreneur and making a difference for the
            development of nation and society.
            <br />
            <br />
            We recognize the unique potential of our fellow students and seek to
            nourish their entrepreneurial spirit and encourage students to
            generate innovative ideas and support them in transforming these
            ideas into practical solutions. Beyond our college, we strive to
            make a significant contribution to our local community by producing
            entrepreneurs who drive positive change.
            <br />
            <br />
            Established in 2014, the club is by students, for students. We
            invite all students who share a passion for entrepreneurship to join
            us on this exciting journey. Together, we aspire to create a future
            where innovation and entrepreneurship are accessible to all, with
            E-Cell as the driving force behind this transformative movement.
            <br />
            <br />
            E-cell is not just an organization; it&apos;s a hub where innovation
            thrives. It serves as a meeting point for startups, entrepreneurs,
            and aspiring visionaries to connect, collaborate, grow and innovate
            together. We believe that the power of entrepreneurship multiplies
            when like-minded individuals come together, share ideas, and work
            collectively to turn dreams into reality.
            <br />
            <br />
            To achieve this objective, we organize variety of events,
            competitions, seminars, and workshops to provide students with
            hands-on experience and exposure to the world of entrepreneurship.
            These initiatives are not only directed to boosting the
            entrepreneurial spirit among our college students but also extend
            their benefits to a broader audience beyond our campus. Whether
            you&apos;re a budding entrepreneur or simply curious about the world
            of startups, there&apos;s a place for you here.
          </blockquote>
        </div>
        {/* motto  */}
        <div className="flex flex-col gap-4">
          <h2
            className="mt-[5.5rem]  mb-4 md:mb-10 text-[48px] font-bold w-full text-center md:text-left gradients"
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            Our Motto
          </h2>
          <p
            className="md:text-[18px] text-[14px] leading- text-white text-left p-5 md:p-0"
            data-aos="zoom-in-up"
            data-aos-delay="10"
            data-aos-duration="1000"
          >
            Entrepreneurship cell where we proudly embrace &quot;Thumbs Up
            Entrepreneurship&quot; as our guiding motto.
            <br />
            <br />
            &quot;Thumbs Up Entrepreneurship&quot; encapsulates our firm
            commitment to fostering an environment where innovation thrives,
            dreams are nurtured, and optimism prevails. This motto represents:
            <br />
            <br />
            Innovation: We applaud groundbreaking ideas and creative thinking,
            encouraging our members to think differently.
            <br />
            Dreams: A &quot;thumbs up&quot; signifies our support for every
            entrepreneur&apos;s aspirations, inspiring them to pursue their
            dreams.
            <br />
            <br />
            Optimism: We face challenges with a positive attitude, recognizing
            that setbacks are part of the entrepreneurial journey.
            <br />
            Inclusivity: Like a &quot;thumbs up,&quot; entrepreneurship knows no
            boundaries; it welcomes individuals from diverse backgrounds and
            perspectives.
            <br />
            <br />
            Collaboration: We believe in the power of community and teamwork,
            where a collective &quot;thumbs up&quot; signifies shared success.
            <br />
            <br />
            With &quot;Thumbs Up Entrepreneurship&quot; as our motto, we are
            united in our pursuit of an entrepreneurial future filled with
            opportunities and achievements. Join us as we continue to champion
            entrepreneurship with enthusiasm and dedication.
          </p>
        </div>
        {/* vision  */}
        <div className="flex flex-col gap-4">
          <h2
            className="mt-[5.5rem]  mb-4 md:mb-10 text-[48px] font-bold w-full text-center md:text-left gradients"
            data-aos="zoom-in"
            data-aos-delay="10"
            data-aos-duration="1000"
          >
            Our Vision
          </h2>
          <p
            className="md:text-[18px] text-[14px] leading- text-white text-left  p-5 md:p-0"
            data-aos="zoom-in-up"
            data-aos-delay="10"
            data-aos-duration="1000"
          >
            SATI Vidisha E-Cell envisions becoming a driving force in fostering
            entrepreneurship within our college and the wider community. We aim
            to empower our members to evolve into visionary leaders who not only
            establish successful enterprises but also leave a lasting impact on
            their surroundings.
            <br />
            <br />
            Looking ahead, we see our E-Cell as a thriving center of innovation,
            where revolutionary ideas are conceived, nurtured, and transformed
            into reality. Our vision is to gain recognition for producing
            entrepreneurs who lead positive transformations, extending our
            influence beyond the college to contribute significantly to the
            local economy and society.
            <br />
            <br />
            Our commitment lies in making entrepreneurship inclusive and
            accessible to all. Through interactive sessions, competitions, and
            mentoring, we aspire to inspire, educate, and connect individuals
            who share a passion for entrepreneurship. Together, we embark on a
            journey towards a brighter future, where innovation and
            entrepreneurship flourish, with SATI Vidisha E-Cell leading the way
          </p>
        </div>
        {/* mission  */}
        <div className="flex flex-col gap-4">
          <h2
            className=" mt-[5.5rem]  mb-4 md:mb-10 text-[48px] font-bold w-full text-center md:text-left gradients"
            data-aos="zoom-in"
            data-aos-delay="10"
            data-aos-duration="1000"
          >
            Our Mission
          </h2>
          <p
            className="md:text-[18px] text-[14px] leading- text-white text-left  p-5 md:p-0"
            data-aos="zoom-in-up"
            data-aos-delay="10"
            data-aos-duration="1000"
          >
            Our mission at SATI Vidisha E-Cell is to empower and nurture the
            entrepreneurial spirit within our diverse student body. We exist to
            provide a dynamic platform for students to transform their
            innovative ideas into impactful ventures. Through a variety of
            hands-on workshops, mentorship programs, and networking
            opportunities, we equip our members with the skills, knowledge, and
            resources they need to succeed in the ever-evolving business
            landscape.
            <br />
            <br />
            Committed to inclusivity, we aim to foster an environment where
            creativity knows no bounds, enabling students from all backgrounds
            to explore entrepreneurship. Our mission revolves around catalyzing
            growth, fostering innovation, and fostering a community of
            changemakers who drive positive change within our
            college and beyond.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
