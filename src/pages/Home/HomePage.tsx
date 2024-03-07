import user from "../../assets/images/770137_man_512x512.png";
import Formular from "./Formular";
const HomePage = () => {
  return (
    <div className="home-page mt-10">
      <div className="greetings flex gap-4 items-center">
        <img
          src={user}
          alt=""
          className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold">👋Bonjour Issa</h2>
          <p className="text-xl">
            Bienvenue sur votre espace KayFay ! Nous sommes le vendredi 15
            septembre 2023
          </p>
        </div>
      </div>
      <Formular />
    </div>
  );
};

export default HomePage;
