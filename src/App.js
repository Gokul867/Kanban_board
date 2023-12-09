// App.js
import React, { useState, useEffect } from 'react';
import KanbanBoard from './KanbanBoard/KanbanBoard';
import ScrollButton from './ScrollButton/ScrollButton';

const App = () => {

  const initialGroupBy = localStorage.getItem('groupBy') || 'status';
  const initialSortBy = localStorage.getItem('sortBy') || 'priority';

  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(initialGroupBy);
  const [sortBy, setSortBy] = useState(initialSortBy);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Save the current groupBy and sortBy values to local storage
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  const handleGroupByChange = (option) => {
    setGroupBy(option);
  };

  const handleSortByChange = (option) => {
    setSortBy(option);
  };

  const handleGroupingClick = (groupingOption) => {
    // Handle logic for Grouping button click
    handleGroupByChange(groupingOption);
  };

  const handleSortingClick = (SortingOption) => {
    // Handle logic for Sorting button click
    // For example, toggle between priority and title
    handleSortByChange(SortingOption);
  };

  return (
    <div>
      {/* Display Scroll Button */}
      <ScrollButton
        onGroupingClick={handleGroupingClick}
        onSortingClick={handleSortingClick}
      />

      {/* Kanban Board component */}
      <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
