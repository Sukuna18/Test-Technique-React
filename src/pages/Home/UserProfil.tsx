import user from "../../assets/images/770137_man_512x512.png";
function UserProfil() {
  return (
    <div className="profil flex flex-col gap-5 justify-center items-center px-32 py-10 border border-gray-300 h-full rounded-lg">
      <img
        src={user}
        alt=""
        className="w-60 h-40 rounded-full border-4 border-white shadow-lg"
      />
      <p className="text-xl font-semibold ">Photo de profil</p>
      <button className="py-4 px-8 text-xl font-semibold bg-green-100 text-green-600 rounded-lg">
        Changer
      </button>
    </div>
  );
}

export default UserProfil;
