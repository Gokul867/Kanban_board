
// KanbanBoard.js
import React from 'react';
import TicketColumn from './TicketColumn';
import './KanbanBoard.css'

const KanbanBoard = ({ tickets, groupBy, sortBy }) => {
    let groupedData;

    // Handle grouping by different options
    if (groupBy === 'status') {
        groupedData = groupByStatus(tickets);
    } else if (groupBy === 'user') {
        groupedData = groupByUser(tickets);
    } else if (groupBy === 'priority') {
        groupedData = groupByPriority(tickets);
    }

    return (
        <div className="kanban-board">
            {/* Render columns based on the grouping */}
            {Object.keys(groupedData).map((group) => (
                <TicketColumn key={group} title={group} number={groupedData[group].length} tickets={groupedData[group]} groupBy={groupBy} sortBy={sortBy} />
            ))}
        </div>
    );
};

// Helper function to group tickets by Status
const groupByStatus = (tickets) => {
    const groupedData = {
        'Backlog': [],
        'Todo': [],
        'In progress': [],
        'Done': [],
        'Cancelled': [],
    };

    tickets.forEach((ticket) => {
        switch (ticket.status) {
            case 'Backlog':
                groupedData['Backlog'].push(ticket);
                break;
            case 'Todo':
                groupedData['Todo'].push(ticket);
                break;
            case 'In progress':
                groupedData['In progress'].push(ticket);
                break;
            case 'Done':
                groupedData['Done'].push(ticket);
                break;
            case 'Cancelled':
                groupedData['Cancelled'].push(ticket);
                break;
            default:
                break;
        }
    });

    return groupedData;
};





// Helper function to group tickets by user
const groupByUser = (tickets) => {
    const groupedData = {};
    tickets.forEach((ticket) => {
        const userName = ticket.userId;
        if (!groupedData[userName]) {
            groupedData[userName] = [];
        }
        groupedData[userName].push(ticket);
    });
    return groupedData;
};

// Helper function to group tickets by priority
const groupByPriority = (tickets) => {
    const groupedData = {
        'No priority': [],
        'Low': [],
        'Medium': [],
        'High': [],
        'Urgent': [],
    };

    tickets.forEach((ticket) => {
        switch (ticket.priority) {
            case 0:
                groupedData['No priority'].push(ticket);
                break;
            case 1:
                groupedData['Low'].push(ticket);
                break;
            case 2:
                groupedData['Medium'].push(ticket);
                break;
            case 3:
                groupedData['High'].push(ticket);
                break;
            case 4:
                groupedData['Urgent'].push(ticket);
                break;
            default:
                break;
        }
    });

    return groupedData;
};

export default KanbanBoard;
