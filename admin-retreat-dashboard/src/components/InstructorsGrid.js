import React from 'react';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';
import { use } from 'react';

const instructors = [
    {
        "name": "Aarav Patel",
        "bio": "Aarav has been practicing yoga for over 10 years and specializes in Hatha Yoga.",
        "qualification": "Certified Yoga Instructor, RYT 500",
        "image": "https://example.com/images/aarav.jpg"
    },
    {
        "name": "Nisha Sharma",
        "bio": "Nisha is an expert in Vinyasa Flow and focuses on mindfulness in her sessions.",
        "qualification": "Certified Yoga Instructor, RYT 200",
        "image": "https://example.com/images/nisha.jpg"
    },
    {
        "name": "Rohan Mehta",
        "bio": "Rohan blends traditional yoga with modern techniques for holistic well-being.",
        "qualification": "Master's in Yoga Therapy",
        "image": "https://example.com/images/rohan.jpg"
    },
    {
        "name": "Ananya Gupta",
        "bio": "Ananya's sessions are known for their intensity and focus on flexibility.",
        "qualification": "Certified Ashtanga Yoga Instructor",
        "image": "https://example.com/images/ananya.jpg"
    },
    {
        "name": "Vikram Sinha",
        "bio": "Vikram brings 15 years of experience in teaching meditation and yoga.",
        "qualification": "Diploma in Yoga Science",
        "image": "https://example.com/images/vikram.jpg"
    },
    {
        "name": "Priya Reddy",
        "bio": "Priya specializes in prenatal yoga and is passionate about women's health.",
        "qualification": "Certified Prenatal Yoga Instructor",
        "image": "https://example.com/images/priya.jpg"
    },
    {
        "name": "Karan Desai",
        "bio": "Karan is known for his dynamic classes that focus on strength and balance.",
        "qualification": "Certified Power Yoga Instructor",
        "image": "https://example.com/images/karan.jpg"
    },
    {
        "name": "Meera Kapoor",
        "bio": "Meera's gentle yoga sessions are perfect for beginners and the elderly.",
        "qualification": "Certified Yoga Instructor, RYT 500",
        "image": "https://example.com/images/meera.jpg"
    },
    {
        "name": "Rajiv Nair",
        "bio": "Rajiv integrates breathing techniques with yoga to enhance mental clarity.",
        "qualification": "Advanced Pranayama Instructor",
        "image": "https://example.com/images/rajiv.jpg"
    },
    {
        "name": "Simran Kaur",
        "bio": "Simran is passionate about using yoga to help people with anxiety and stress.",
        "qualification": "Certified Yoga Therapist",
        "image": "https://example.com/images/simran.jpg"
    },
    {
        "name": "Amit Verma",
        "bio": "Amit's classes focus on strength-building through traditional yoga postures.",
        "qualification": "Certified Hatha Yoga Instructor",
        "image": "https://example.com/images/amit.jpg"
    },
    {
        "name": "Sonal Joshi",
        "bio": "Sonal teaches restorative yoga, helping students recover from injuries.",
        "qualification": "Certified Restorative Yoga Instructor",
        "image": "https://example.com/images/sonal.jpg"
    },
    {
        "name": "Gaurav Thakur",
        "bio": "Gaurav specializes in hot yoga and has been teaching for over 7 years.",
        "qualification": "Certified Hot Yoga Instructor",
        "image": "https://example.com/images/gaurav.jpg"
    },
    {
        "name": "Ritika Bansal",
        "bio": "Ritika's classes focus on improving flexibility and inner peace.",
        "qualification": "Certified Vinyasa Yoga Instructor",
        "image": "https://example.com/images/ritika.jpg"
    },
    {
        "name": "Ravi Bhatt",
        "bio": "Ravi combines traditional yoga practices with modern fitness techniques.",
        "qualification": "Certified Yoga Instructor, RYT 200",
        "image": "https://images.healthshots.com/healthshots/en/uploads/2022/05/11184715/Yoga-for-weight-loss.jpg"
    }
];

const InstructorCard = ({ name, bio, qualification, image }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="faderight">
        <img className="w-full h-48 object-cover" src={image} alt={name} />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">{bio}</p>
            <p className="text-sm text-blue-600 font-bold">{qualification}</p>
        </div>
    </div>
);

function InstructorsGrid (){
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
   return (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Instructors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
                <InstructorCard
                    key={index}
                    name={instructor.name}
                    bio={instructor.bio}
                    qualification={instructor.qualification}
                    image={instructor.image}
                />
            ))}
        </div>
    </div>
);
}

export default InstructorsGrid;
