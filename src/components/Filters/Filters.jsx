import css from "./Filters.module.css";

const Filters = () => {
  return (
    <form>
      BrendSelect PriseSelect
      <input type="text" placeholder="From"></input>
      <input type="text" placeholder="To"></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default Filters;
