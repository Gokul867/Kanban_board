// TicketCard.js
import React from 'react';
import './TitleCard.css'
const TicketCard = ({ ticket }) => {
    return (
        <div className="ticket-card">
            <div className="ticket-details">
                <div class="container">
                    <div class="row">
                        <span id="id">{ticket.id}</span>
                    </div>
                    <div class="row">
                        <h2 id="title">{ticket.title}</h2>
                    </div>
                    <div class="row9">
                        <i class="fa fa-ellipsis-h"></i>
                        <span id="text">{ticket.tag.join(', ')}</span>
                    </div>
                </div>


            </div>
            {/* Add more details as needed */}
        </div>
    );
};

export default TicketCard;
