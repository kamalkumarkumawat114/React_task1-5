import { useState } from "react";

function SearchFilter() {
    const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Watermelon'];
    const [query, setQuery] = useState('');
  
    const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  
    return (
      <div className="section">
        <h2>Search Filter</h2>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  export default SearchFilter;