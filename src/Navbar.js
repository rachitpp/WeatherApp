export default function Navbar({ input, setInput, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input); // Pass current input value to parent
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        minLength={3}
        className="search-input"
      />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}
