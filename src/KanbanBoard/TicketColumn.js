
// TicketColumn.js
import React from 'react';
import TicketCard from './TicketCard';
import './TicketColumn.css'

const TicketColumn = ({ title, number, tickets, groupBy, sortBy }) => {
    if (number !== 0) {
        return (
            <div className="ticket-column">
                <div className='ticket-border'>
                    <div class="row3">
                        <i class="fas fa-check"></i>
                        <span class="title">{title}</span>
                        <span class="number">{number}</span>
                        <div className='spacer'>
                            <div class="icons">
                                <i class="fa fa-plus"></i>
                                <i class="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Render tickets in this column */}
                {tickets
                    .sort((a, b) => (sortBy === 'priority' ? b.priority - a.priority : a.title.localeCompare(b.title)))
                    .map((ticket) => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
            </div>
        );

    }
    else {
        return (
            <div className="ticket-column">
                <div className='ticket-border'>
                    <div class="row3">
                        <i class="fas fa-check"></i>
                        <span class="title">{title}</span>
                        <span class="number">{number}</span>
                        <div className='spacer'>
                            <div class="icons">
                                <i class="fa fa-plus"></i>
                                <i class="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default TicketColumn;
