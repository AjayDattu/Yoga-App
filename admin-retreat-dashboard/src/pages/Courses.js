import React from 'react';

const reviews = [
  {
    "user": "64b0e9c4972efc4f3a67bde0",
    "accommodation": "64b0e9c4972efc4f3a67bdf0",
    "retreatcenter": "64b0e9c4972efc4f3a67bdf1",
    "rating": 5,
    "reviewText": "Amazing experience! The room was clean, comfortable, and the view was breathtaking.",
    "createdAt": "2024-08-01T10:15:30.000Z",
    "updatedAt": "2024-08-01T10:15:30.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bde1",
    "accommodation": "64b0e9c4972efc4f3a67bdf2",
    "retreatcenter": "64b0e9c4972efc4f3a67bdf3",
    "rating": 4,
    "reviewText": "Very comfortable stay with excellent service. The food could have been better.",
    "createdAt": "2024-08-02T12:30:45.000Z",
    "updatedAt": "2024-08-02T12:30:45.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bde2",
    "accommodation": "64b0e9c4972efc4f3a67bdf4",
    "retreatcenter": "64b0e9c4972efc4f3a67bdf5",
    "rating": 3,
    "reviewText": "The room was decent but a bit overpriced for what was offered.",
    "createdAt": "2024-08-03T14:22:10.000Z",
    "updatedAt": "2024-08-03T14:22:10.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bde3",
    "accommodation": "64b0e9c4972efc4f3a67bdf6",
    "retreatcenter": "64b0e9c4972efc4f3a67bdf7",
    "rating": 2,
    "reviewText": "Not very clean and the amenities were lacking. Expected better for the price.",
    "createdAt": "2024-08-04T09:45:00.000Z",
    "updatedAt": "2024-08-04T09:45:00.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bde4",
    "accommodation": "64b0e9c4972efc4f3a67bdf8",
    "retreatcenter": "64b0e9c4972efc4f3a67bdf9",
    "rating": 5,
    "reviewText": "The best stay I've ever had! Everything was perfect, from the room to the service.",
    "createdAt": "2024-08-05T16:00:30.000Z",
    "updatedAt": "2024-08-05T16:00:30.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bde5",
    "accommodation": "64b0e9c4972efc4f3a67bd00",
    "retreatcenter": "64b0e9c4972efc4f3a67bdfb",
    "rating": 4,
    "reviewText": "Great location and friendly staff. Would definitely recommend.",
    "createdAt": "2024-08-06T11:30:20.000Z",
    "updatedAt": "2024-08-06T11:30:20.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bde6",
    "accommodation": "64b0e9c4972efc4f3a67bd01",
    "retreatcenter": "64b0e9c4972efc4f3a67bdfc",
    "rating": 1,
    "reviewText": "Terrible experience. The room was dirty and the staff was rude.",
    "createdAt": "2024-08-07T18:15:45.000Z",
    "updatedAt": "2024-08-07T18:15:45.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bde7",
    "accommodation": "64b0e9c4972efc4f3a67bd02",
    "retreatcenter": "64b0e9c4972efc4f3a67bdfd",
    "rating": 3,
    "reviewText": "Average stay. The amenities were okay, but nothing special.",
    "createdAt": "2024-08-08T14:05:30.000Z",
    "updatedAt": "2024-08-08T14:05:30.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bde8",
    "accommodation": "64b0e9c4972efc4f3a67bd03",
    "retreatcenter": "64b0e9c4972efc4f3a67bdfe",
    "rating": 4,
    "reviewText": "Comfortable room with a beautiful view. The food was great as well.",
    "createdAt": "2024-08-09T09:20:10.000Z",
    "updatedAt": "2024-08-09T09:20:10.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bde9",
    "accommodation": "64b0e9c4972efc4f3a67bd04",
    "retreatcenter": "64b0e9c4972efc4f3a67bdff",
    "rating": 5,
    "reviewText": "Exceptional stay! The room was luxurious and the service was top-notch.",
    "createdAt": "2024-08-10T12:45:00.000Z",
    "updatedAt": "2024-08-10T12:45:00.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bdea",
    "accommodation": "64b0e9c4972efc4f3a67bd05",
    "retreatcenter": "64b0e9c4972efc4f3a67be00",
    "rating": 2,
    "reviewText": "The room was too small and the bed was uncomfortable.",
    "createdAt": "2024-08-11T15:00:25.000Z",
    "updatedAt": "2024-08-11T15:00:25.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bdeb",
    "accommodation": "64b0e9c4972efc4f3a67bd06",
    "retreatcenter": "64b0e9c4972efc4f3a67be01",
    "rating": 4,
    "reviewText": "Very good stay. The amenities were well-maintained and the staff was courteous.",
    "createdAt": "2024-08-12T17:30:40.000Z",
    "updatedAt": "2024-08-12T17:30:40.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bdec",
    "accommodation": "64b0e9c4972efc4f3a67bd07",
    "retreatcenter": "64b0e9c4972efc4f3a67be02",
    "rating": 5,
    "reviewText": "An unforgettable experience! The accommodation exceeded all expectations.",
    "createdAt": "2024-08-13T08:10:15.000Z",
    "updatedAt": "2024-08-13T08:10:15.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bded",
    "accommodation": "64b0e9c4972efc4f3a67bd08",
    "retreatcenter": "64b0e9c4972efc4f3a67be03",
    "rating": 3,
    "reviewText": "Decent stay but could have been better in terms of cleanliness.",
    "createdAt": "2024-08-14T13:50:05.000Z",
    "updatedAt": "2024-08-14T13:50:05.000Z"
  },
  {
    "user": "64b0e9c4972efc4f3a67bdee",
    "accommodation": "64b0e9c4972efc4f3a67bd09",
    "retreatcenter": "64b0e9c4972efc4f3a67be04",
    "rating": 4,
    "reviewText": "Nice place to relax. The environment was peaceful and the staff was friendly.",
    "createdAt": "2024-08-15T19:25:30.000Z",
    "updatedAt": "2024-08-15T19:25:30.000Z"
  }

];

const d = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {reviews.map((review, index) => (
        <div key={index} className="p-4 border rounded shadow">
          <p><strong>Rating:</strong> {review.rating}/5</p>
          <p>{review.reviewText}</p>
          <p><small>{new Date(review.createdAt).toLocaleDateString()}</small></p>
        </div>
      ))}

    </div>

  );
};

export default d;
