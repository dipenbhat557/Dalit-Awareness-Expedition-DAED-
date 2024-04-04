import PayForm from "./PayForm";

const Support = () => {
  return (
    <div className="flex lg:flex-row flex-col  lg:justify-around     mb-4  ">
      <div className="flex lg:flex-row lg:justify-around justify-around items-center  flex-col ">
        <div className="max-w-[400px] mt-8 ">
          <h1 className="text-xl">
            Join us in our mission to empower Dalit communities, advocating for
            the rights and dignity of the underprivileged lower caste
            individuals.Your support fuels our support to break down barriers,
            foster equality , and create a better future for all. Together ,we
            can make a meaningful difference and amplify the voices of those who
            have been marginalized.Every contribution counts.
          </h1>
          <div className="max-w-[400px] h-full my-4">
            <img
              src="https://tds-images.thedailystar.net/sites/default/files/feature/images/underprivileged_women.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>

          <div className="my-8 mx-2">
            <div>
              <h1 className="text-4xl block">Our Adress</h1>
              <h1 className="block text-2xl">Deukhuri Multiple Campus</h1>
            </div>
            <div className="py-4 space-y-4">
              <h1>Lamahi-6 Dang ,Nepal</h1>

              <h1>+977 9865789, 09846290,089876</h1>
              <h1>deukhuricampus@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-0">
        <PayForm />
      </div>
    </div>
  );
};

export default Support;
