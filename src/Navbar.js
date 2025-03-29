import React from "react";

export default function Navbar({ input, setInput, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input); // Pass current input value to parent
  };

  return (
    <div className="container">
      <div className="search-section">
        <form onSubmit={handleSubmit} className="search-bar">
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search"
              minLength={3}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              🔍
            </button>
          </div>
        </form>
      </div>
      {/* Weather container and other content can go here */}
    </div>
  );
}
