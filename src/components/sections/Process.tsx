import Image from 'next/image';

const processSteps = [
  {
    number: "1",
    title: "consultation",
    description: "We meet with you",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/process-1-10.png",
  },
  {
    number: "2",
    title: "Design",
    description: "Design your dream home",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/process-2-11.png",
  },
  {
    number: "3",
    title: "Quote",
    description: "Custom Quotation",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/process-3-12.png",
  },
  {
    number: "4",
    title: "build",
    description: "Build your dream home",
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b2809bd9-89fd-4c92-9663-6c7811abddea-fortuneliving-com-au/assets/images/process-4-13.png",
  },
];

const ProcessStepCard = ({
  number,
  title,
  description,
  iconSrc,
  index,
}: {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
  index: number;
}) => {
  const isNumberOnLeft = index % 2 !== 0;

  return (
    <div className="relative flex min-h-[180px] items-center overflow-hidden px-8 py-4 lg:px-12">
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 font-extrabold text-white/10 text-[220px] leading-none
        ${isNumberOnLeft ? 'left-0 -translate-x-[25%]' : 'right-0 translate-x-[25%]'}`}
      >
        {number}
      </span>
      
      <div className={`relative z-10 flex w-full items-center gap-6 ${isNumberOnLeft ? 'pl-2 md:pl-8' : ''}`}>
        <Image
          src={iconSrc}
          alt=""
          width={80}
          height={80}
          className="h-[70px] w-[70px] shrink-0"
        />
        <div className="flex flex-col">
          <h3 className="text-[28px] font-extrabold uppercase tracking-wide text-primary-dark">
            {title}
          </h3>
          <p className="mt-1 text-lg text-primary-dark/90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Process() {
  return (
    <section className="bg-warm-beige">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center text-[40px] font-extrabold uppercase tracking-wider text-primary-dark">
          our process
        </h2>
        
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
          {processSteps.map((step, index) => (
            <ProcessStepCard
              key={step.number}
              {...step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
