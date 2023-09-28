import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AboutModal from "../AboutModal/AboutModal";

const About = () => {
  const { user } = useContext(AuthContext);

  const [userData, setUserData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`https://smedia-server.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, [user?.email]);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleUpdateUser = (updatedUserData) => {
    console.log('Updating user data:', updatedUserData);

    setUserData(updatedUserData);
  };

  return (
    <div className="w-full md:w-[550px] mx-auto py-12">
      <div className="rounded-md border-2 p-2 py-4">
        <h3 className="px-0 xl:px-10 text-xl md:text-2xl py-4">
          {userData?.name}
        </h3>
        <div className="py-4">
          <p className="px-0 xl:px-10">Email: {userData?.email} </p>
          <p className="px-0 xl:px-10 py-4">
            Address: {userData?.address ? userData?.address : "none"}{" "}
          </p>
          <p className="px-0 xl:px-10">
            University: {userData?.university ? userData?.university : "none"}{" "}
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={handleClick}
            className="rounded-md px-3 py-2 text-sm md:text-base md:px-8 hover:bg-blue-600 text-black bg-transparent hover:text-white border-blue-600 border-2 duration-500"
          >
            Edit
          </button>
          <AboutModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            user={userData}
            onUpdateUser={handleUpdateUser}

          />
        </div>
      </div>
    </div>
  );
};

export default About;
