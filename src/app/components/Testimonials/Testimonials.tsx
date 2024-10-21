// src/app/components/Testimonials.tsx
const testimonials = [
  {
    name: 'Fatima',
    review: 'I absolutely love my silk scarf! It adds elegance to any outfit. ✨🧣',
  },
  {
    name: 'Sidra',
    review: 'The cotton scarf is perfect for everyday wear. Highly recommend! 👍💖',
  },
  {
    name: 'Amal',
    review: 'Amazing quality and fast shipping. Will definitely buy again! 🚚🌟',
  },
];

const Testimonials = () => {
  return (
    <div className="p-4 mt-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl text-center font-bold">What Our Customers Say 💬</h2>
      <br/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border rounded-lg p-4">
            <p className="italic">{testimonial.review}</p>
            <p className="mt-2 font-bold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
