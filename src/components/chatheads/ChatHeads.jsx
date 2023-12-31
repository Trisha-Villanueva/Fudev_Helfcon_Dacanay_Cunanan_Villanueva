import React from "react";
import { FaEdit, FaEllipsisH, FaVideo } from "react-icons/fa";
import "./chatheads.css";

export default function ChatHeads({ items, setReceiver }) {
  return (
    <div>
      <div className="conv-header-container">
        <p className="conversations-header">Conversations</p>
        <div>
          <FaEllipsisH />
          <FaVideo />
          <FaEdit />
        </div>
      </div>
      <input className="chat-heads-search" placeholder="Search..." />

      <div className="chat-heads-container">
        {items.map((obj, i) => (
          <div
            key={i}
            className="chat-head-item"
            onClick={() => setReceiver(obj)}
          >
            <div className="user-profile-pic-container">
              <p className="user-profile-pic-text">{obj.username[0]}</p>
            </div>
            {/* test to see which email */}
            {/* <p>{obj.email}</p> */}
            <p>{obj.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
