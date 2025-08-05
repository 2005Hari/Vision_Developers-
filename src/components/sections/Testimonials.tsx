import Image from "next/image";
import { CheckCircle, Star } from "lucide-react";

const testimonialsData = [
  {
    name: "Jignesh",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/Wembley-Facade-2-scaled-15.jpg",
    text: "Thank you to all Vision Developers staff. and special thanks to shivam and rajiv. for all support. to make our dream home true. it is easy to communicate with Vision Developers staff. I thought that making new home is very crucial process and lengthy stages to council approval and everything . but with good communication and support. it is just done in very easy way. I didn't know when it been done. even all trades are good cooperative and helpful thanks to all Vision Developers team",
    imagePosition: "left",
  },
  {
    name: "Gina",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/Isabella-Facade-1-scaled-17.jpg",
    text: "Vision Developers has built my dream house, from helping organising demolishing to design and build. From boss to supervisor and other staff, they are easy to reach and respond in a reasonable time frame. Especially the boss Ravi, he always replied text messages, emails and phone calls. He is easy to deal with and has a kind warm heart. I remember at the planning stage, I got financial problem due to unexpected reason. Ravi said \"no problems\" when I told him. He is the only one among people I am not familiar with who made me being supported. I never forget this. They are other good staff too, such as Nisharg and Raj. They do their best to meet clients' needs and respond back in a timely manner to clients. The work is good too and being completed in a reasonable frame of time. I have recommended Vision Developers to my friends and some have started contacting them and making quote. I wish Vision Developers the best and becoming one of the leading company in building industry in the near future.",
    imagePosition: "right",
  },
  {
    name: "Varun",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/Wembley-Facade-2-scaled-15.jpg", // The content refers to a duplicate image name, using visually similar asset
    text: "We had a excellent experience with Vision Developers for construction of our dream home.Fast & Fabulous work, decorative looks for less price, installed newest technological kitchen applicances and free upgrade ceiling height(up to 3m in living room).Also they provide upsize Windows,adequate space for all bedrooms, used premium cost effective Constuction materials all around house.Guide me to save some $$$ where I can do some DIY project by myself (backyard work etc) while helping me free planning & design. I definitely recommend to consider Vision Developers for building of your dream home.Varun Gandhi",
    imagePosition: "left",
  },
  {
    name: "Salim Zaman",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/Mission-Facade-2-19.jpg",
    text: "Thank you, Vision Developers, for building our dream home. We could not have done this without your support and guidance. We would like to especially mention Ravi and Gurtej for their tremendous effort, hard work and flexibility in helping us achieve our goal. Special thanks to Rahee and Dina for your initial recommendation and your kind support throughout this journey. Thank you, Dharam, for your site supervision and attention to detail. Thanks to Nisarg for your kind support during the maintenance period. We would also like to thank John for his advice to resolve the crucial issue. Thank you to all staff at Vision Developers and all trade personnel involved in our building process. This is not our first building experience. However, this was the first time we enjoyed a truly comfortable and seamless experience with Vision Developers due to their patience, flexibility and understanding. We would strongly recommend anyone contemplating a new build to choose Vision Developers as your builder. We would like to express our heartfelt gratitude to Ravi for his knowledge and experience in providing us with the right guidance from concept planning to handover. Thanks to Gurtej for your patience in handling all the complex paperwork and providing a smooth transition. We will always come to you in future if we build again. We wish Vision Developers a prosperous and successful future. Salim and Kishowar",
    imagePosition: "right",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-light-grey py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/google-reviews-14.png"
            alt="Google"
            width={180}
            height={60}
            className="h-auto"
          />
          <h2 className="text-4xl font-extrabold text-primary-dark mt-4">Verified Reviews</h2>
          <div className="flex items-center gap-2 mt-4">
            <CheckCircle className="h-7 w-7 text-green-500" />
            <div className="flex text-gold-star">
              <Star fill="currentColor" className="h-7 w-7" />
              <Star fill="currentColor" className="h-7 w-7" />
              <Star fill="currentColor" className="h-7 w-7" />
              <Star fill="currentColor" className="h-7 w-7" />
              <Star fill="currentColor" className="h-7 w-7" />
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                testimonial.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2 w-full">
                <Image
                  src={testimonial.imageUrl}
                  alt={`Home built for ${testimonial.name}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2 w-full bg-white p-8 lg:p-10" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary-dark">{testimonial.name}</h3>
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/5stars-16.png"
                    alt="5 stars rating"
                    width={130}
                    height={25}
                    className="mx-auto my-4"
                  />
                </div>
                <p className="text-medium-grey text-[15px] leading-relaxed">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
