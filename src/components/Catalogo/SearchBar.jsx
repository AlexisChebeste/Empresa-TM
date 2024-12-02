const SearchBar = ({ value, onChange }) => (
    <input
      className="w-full p-2 md:w-72 border rounded-md focus:outline-none focus:border-orange-500"
      type="text"
      value={value}
      placeholder="Ingrese el nombre del elemento"
      onChange={onChange}
      aria-label="Buscar por nombre"
    />
  );

export default SearchBar;