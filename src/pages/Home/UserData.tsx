function UserData() {
  return (
    <div className="form w-full">
      <div>
        <p className="text-xl font-semibold">Dènomination</p>
      </div>
      <div className="form-data flex gap-8">
        <div className="form-group w-full mt-4">
          <label
            htmlFor="nom"
            className=" text-gray-500 font-semibold uppercase"
          >
            Prénom
          </label>
          <input
            type="text"
            name="nom"
            id="nom"
            placeholder="Goumbala"
            className=" p-4 w-full rounded-lg bg-green-50 mt-1"
          />
        </div>
        <div className="form-group w-full mt-4">
          <label
            htmlFor="prenom"
            className=" text-gray-500 font-semibold uppercase"
          >
            Nom
          </label>
          <input
            type="text"
            name="prenom"
            id="prenom"
            placeholder="Goumbala"
            className="p-4 w-full rounded-lg bg-green-50 mt-1"
          />
        </div>
      </div>
      <div className="form-data flex gap-8 custom:flex-col">
        <div className="form-group w-full mt-4">
          <label
            htmlFor="fonction"
            className=" text-gray-500 font-semibold uppercase"
          >
            Fonction
          </label>
          <input
            type="text"
            name="fonction"
            id="fonction"
            placeholder="Directeur"
            className=" p-4 w-full rounded-lg bg-green-50 mt-1"
          />
        </div>
        <div className="form-group w-full mt-4 custom:mt-0">
          <label
            htmlFor="numero"
            className=" text-gray-500 font-semibold uppercase"
          >
            Numéro SS
          </label>
          <input
            type="text"
            name="numero"
            id="numero"
            placeholder="77 123 45 67"
            className="p-4 w-full rounded-lg bg-green-50 mt-1"
          />
        </div>
      </div>
      <div className="form-data flex gap-8 custom:flex-col">
        <div className="form-group w-full mt-4">
          <label
            htmlFor="fonction"
            className=" text-gray-500 font-semibold uppercase"
          >
            Situation matrimoniale
          </label>
          <select
            name="situation"
            id="situation"
            className="p-4 w-full rounded-lg bg-green-50 mt-1 outline-none"
          >
            <option value="celibataire">Célibataire</option>
            <option value="marie">Marié</option>
            <option value="divorce">Divorcé</option>
            <option value="veuf">Veuf</option>
          </select>
        </div>
        <div className="form-group w-full mt-4 flex gap-10">
          <div className="w-full">
            <label
              htmlFor="enfant"
              className=" text-gray-500 font-semibold uppercase"
            >
              Nombre d'enfants
            </label>
            <div className="flex mt-1 bg-green-50 items-center justify-around rounded-lg">
              <div className="menos">
                <button className="p-4 bg-green-50 font-semibold text-2xl">
                  -
                </button>
              </div>
              <input
                type="text"
                name="enfant"
                id="enfant"
                placeholder="2"
                className="w-10 bg-green-50 p-4 text-center outline-none font-semibold"
              />
              <div className="mas">
                <button className="p-4 bg-green-50 font-semibold text-2xl">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="enfant"
              className=" text-gray-500 font-semibold uppercase"
            >
              Nombre de femmes
            </label>
            <div className="flex mt-1 bg-green-50 justify-around items-center rounded-lg">
              <div className="menos">
                <button className="p-4 bg-green-50 font-semibold text-2xl">
                  -
                </button>
              </div>
              <input
                type="text"
                name="enfant"
                id="enfant"
                placeholder="2"
                className="w-10 bg-green-50 p-4 text-center outline-none font-semibold"
              />
              <div className="mas">
                <button className="p-4 bg-green-50 font-semibold text-2xl">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-xl font-semibold">Adresse</p>
      </div>
      <div className="form-data flex gap-8 custom:flex-col">
        <div className="form-group w-full mt-4">
          <label
            htmlFor="voie"
            className=" text-gray-500 font-semibold uppercase"
          >
            Voie
          </label>
          <input
            type="text"
            name="voie"
            id="voie"
            placeholder="Rue du Patio"
            className=" p-4 w-full rounded-lg bg-green-50 mt-1"
          />
        </div>
        <div className="form-group w-full mt-4">
          <label
            htmlFor="complement"
            className=" text-gray-500 font-semibold uppercase"
          >
            Complément de distribution
          </label>
          <input
            type="text"
            name="complement"
            id="complement"
            placeholder="Almadies"
            className="p-4 w-full rounded-lg bg-green-50 mt-1"
          />
        </div>
      </div>
      <div className="form-data flex gap-8">
        <div className="form-group w-full mt-4">
          <label
            htmlFor="code"
            className=" text-gray-500 font-semibold uppercase"
          >
            Code postal
          </label>
          <input
            type="text"
            name="code"
            id="code"
            placeholder="10000"
            className=" p-4 w-full rounded-lg bg-green-50 mt-1"
          />
        </div>
        <div className="form-group w-full mt-4">
          <label
            htmlFor="ville"
            className=" text-gray-500 font-semibold uppercase"
          >
            Ville
          </label>
          <input
            type="text"
            name="ville"
            id="ville"
            placeholder="Dakar"
            className=" p-4 w-full rounded-lg bg-green-50 mt-1"
          />
        </div>
        <div className="form-group w-full mt-4">
          <label
            htmlFor="pays"
            className=" text-gray-500 font-semibold uppercase"
          >
            Pays
          </label>
          <input
            type="text"
            name="pays"
            id="pays"
            placeholder="Senegal"
            className="p-4 w-full rounded-lg bg-green-50 mt-1"
          />
        </div>
      </div>
      <div className="form-data mt-20">
        <div className="form-group w-full flex justify-end items-center custom:justify-center">
          <div>
            <button className="p-4 font-semibold rounded-lg text-xl mr-8">
              Annuler
            </button>
            <button
              className="p-4 bg-green-600 text-white font-semibold rounded-lg"
              type="submit"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserData;
