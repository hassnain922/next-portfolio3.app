import Image from 'next/image';

const AboutSection = () => {
  return (
    <div>
      <h2 className="flex text-2xl items-center justify-center mb-10 mt-2 font-extrabold">
        Create your new Portfolio
      </h2>
      <div className="h-screen flex flex-col items-center justify-between">
        <div className="flex items-center justify-around mb-2">
          <div className="relative h-40 w-40 rounded-full overflow-hidden">
            <Image alt="" src="/hero.jpg" layout="fill" objectFit="cover" />
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-md font-bold mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Education" className="block text-gray-900 text-md font-bold mb-2">
                Education
              </label>
              <input
                id="Education"
                name="Education"
                type="text"
                placeholder="Education"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Automation
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Monitoring
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Security
              </span>
            </div>
          </div>
        </div>
        <div className='flex p-20 text-2xl' >
          <h2 className=" font-extrabold ">About me</h2>
          <p className="text-gray-700 ">
            DevOps Engineer. I am profound in infrastructure and implementing scalable and highly available cloud architectures that optimize performance, security, and cost-efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
