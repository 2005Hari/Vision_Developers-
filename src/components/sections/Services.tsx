import Image from 'next/image';

const servicesData = [
  {
    title: "Custom\nNew Homes",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/9A-Windsor-Avenue-Clearview-008-scaled-28.jpg?",
  },
  {
    title: "Knockdown\nRebuild",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/image-29.jpeg?",
  },
  {
    title: "Sub\nDivisions",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/149298772_2884171231907277_1884201988919015498_n-30.jpeg?",
  },
  {
    title: "Multi\nDwelling",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/Mission-Facade-2-19.jpg?",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-center font-extrabold text-primary-dark text-[35px] mb-16 uppercase tracking-[0.2em]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="group relative overflow-hidden cursor-pointer">
              <div className="relative w-full h-[240px]">
                <Image
                  src={service.imageUrl}
                  alt={service.title.replace("\n", " ")}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-white text-center">
                <h3 className="font-extrabold text-primary-dark text-xl leading-tight whitespace-pre-line">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
