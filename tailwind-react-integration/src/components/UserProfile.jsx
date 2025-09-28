function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 md:p-8 sm:p-4 max-w-xm max-w-sm mx-auto my-20 rounded-lg shadow-lg  " >
      <img src="https://via.placeholder.com/150" alt="User" className="md:w-36 md:h-36 rounded-full mx-auto sm:w-24 sm:h-24" />
      <h1 className="text-xl-md text-lg-sm text-blue-800 my-4 ">John Doe</h1>
      <p className="text-gray-600 text-base-md text-sm-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;