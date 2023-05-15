import Image from 'next/image';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <Image
              src={
                'https://media.licdn.com/dms/image/C4D03AQFF_0WxOBVN-w/profile-displayphoto-shrink_800_800/0/1661086836195?e=1689811200&v=beta&t=HuH7R6vsIxpvCsy9bMagLLaqnD_HKg4vKshtU5B8-Aw'
              }
              alt="Daniel"
              width={500}
              height={500}
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-black font-bold md:text-4xl">
              Welcome to my NextJs 13 Demo Blog
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              {' '}
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
