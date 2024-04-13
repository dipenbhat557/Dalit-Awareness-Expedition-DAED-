import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col  lg:mx-4 mx-auto mb-4  ">
      <div className="flex lg:flex-row lg:justify-around justify-around items-center  flex-col ">
        <div className="max-w-[400px] mt-8 ">
          <h1 className="text-xl">
            {" "}
            We are just one click away from to help you to put your thought and
            ideas to incredible heights.Fill in the form to share more details
            about your inquiry.Or your favourite thoughts.Either way, we'll love
            to talk about it.
          </h1>

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

        <div>
          <ContactForm />
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row lg:justify-around my-4 items-center   ">
        <div className="max-w-[400px] mb-4 lg:mb-0">
          <h1 className=" text-xl">
            Our office is located by the Dang,Nepal.{" "}
            <span className=" block bold text-black">
              "Empower. Elevate. Inspire . Thrive"
            </span>
            We're based on the heart of the beautiful city Dang,so don't
            hesitate to visit by bus ,boat or jet skii too.We have open door
            policy.
          </h1>
        </div>
        <div className="max-w-[400px] ">
          <img
            src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png"
            alt="/error"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
