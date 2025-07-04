import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <form
      className="d-flex justify-content-center"
      onSubmit={handleSubmit}
      style={{ margin: "2rem 0" }}
    >
      <div
        style={{
          background: "linear-gradient(90deg, #6a82fb 0%, #a084ee 100%)",
          borderRadius: "2rem",
          boxShadow: "0 4px 16px rgba(106,130,251,0.10)",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          maxWidth: 520,
          width: "100%",
        }}
      >
        <input
          type="text"
          style={{
            background: "transparent",
            color: "#fff",
            fontWeight: 500,
            border: "none",
            outline: "none",
            boxShadow: "none",
            flex: 1,
            fontSize: "1.1rem",
            padding: "0.5rem 1rem",
            minWidth: 0,
          }}
          placeholder="Buscar receta por nombre..."
          value={input}
          onChange={handleChange}
          aria-label="Buscar receta por nombre"
        />
        <button
          className="btn"
          type="submit"
          style={{
            background: "#4f5bd5",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "1.5rem",
            marginLeft: "1rem",
            padding: "0.5rem 1.5rem",
            boxShadow: "0 2px 8px rgba(79,91,213,0.10)",
            border: "none",
            fontSize: "1.1rem",
            transition: "background 0.2s",
          }}
        >
          <i className="bi bi-search" style={{ marginRight: 6 }} />
          Buscar
        </button>
      </div>
    </form>
  );
};

export default SearchBar;