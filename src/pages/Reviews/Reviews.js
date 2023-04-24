import React from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Testimony from "../Home/Testimonial/Testimony/Testimony";

const Reviews = () => {
  const testimonies = [
    {
      id: 1,
      name: "Donald Kingston",
      country: "Chattogram",
      comment:
        "A wonderful doctor in all aspects, professional, bedside manner, caring and gentle! Awesome experience. Dr. Wun is a very attentive and caring doctor. Gave very thorough care and he’s very knowledgeable and intelligent.",
      image: people1,
    },
    {
      id: 2,
      name: "Hasim Amla",
      country: "Sylhet",
      comment:
        "I met with Dr. Lisa Ann Newman first time. She explained everything in details, make me feel so comfortable to be her patient. Dr. Lisa Newman and her staff are wonderful. Prompt, compassionate and expert!",
      image: people2,
    },
    {
      id: 3,
      name: "Cerry Anderson",
      country: "Banani",
      comment:
        "Dr Swistel is a very compassionate, and caring professional. He explained the issues that were relevant to me in an easy manner. I felt that he would do what was needed to treat me and find a good solution.",
      image: people3,
    },
  ];
  return (
    <div className='p-5'>
      <h2 className="text-3xl text-primary font-bold my-5">All Reviews</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-7">
        {testimonies.map((testimony) => (
          <Testimony key={testimony.id} testimony={testimony}></Testimony>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
