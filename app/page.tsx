import Link from 'next/link';
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <div className="bg-violet-100">
        <div className="py-16 bg-violet-100">
          <div className="container m-auto px-6">
            <div className="lg:flex justify-between items-center">
              <div className="lg:w-6/12 lg:p-0 p-7">
                <h1 className="sm:text-5xl text-4xl text-purple-600 font-medium leading-tight mb-5 capitalize">
                  Welcome to my NextJs 13 Demo Blog
                </h1>
                <p className="text-xl text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an
                </p>

                <div className="py-5 flex gap-x-4">
                  <Link
                    href={'https://github.com/Daniel3Levi'}
                    className="text-black border px-5 py-2 border-purple-600 rounded-lg border-t-2 border-l-2"
                  >
                    Github
                  </Link>
                  <Link
                    href={'https://www.linkedin.com/in/daniel-levi-fullstack/'}
                    className="text-black border px-5 py-2 border-purple-600 rounded-lg border-t-2 border-l-2"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
              <div className="lg:w-4/12 rounded-full scale-100 ">
                <Image
                  className="rounded-full"
                  alt="Daniel"
                  width={350}
                  height={350}
                  src="https://media.licdn.com/dms/image/C4D03AQFF_0WxOBVN-w/profile-displayphoto-shrink_800_800/0/1661086836195?e=1689811200&v=beta&t=HuH7R6vsIxpvCsy9bMagLLaqnD_HKg4vKshtU5B8-Aw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
