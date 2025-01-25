"use client";

import { useState } from "react";
import { Calendar } from "react-calendar"; // Install react-calendar using yarn
import "react-calendar/dist/Calendar.css";

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalData, setModalData] = useState(null);

  const data = {
    Upcoming: [
      {
        image: "/images/eventimg.jpg",
        title: "Tech Innovation Conference 2024",
        date: "2024-05-15",
        location: "Lagos, Nigeria",
        description: "Join industry leaders to discuss the future of tech innovations.",
        registrationLink: "#",
      },
      {
        image: "/images/eventimg.jpg",
        title: "Healthcare Summit",
        date: "2024-06-05",
        location: "Abuja, Nigeria",
        description:
          "A platform for healthcare professionals to network and share ideas.",
        registrationLink: "#",
      },
      // Added event for December 30, 2024
      {
        image: "/images/eventimg.jpg",
        title: "End of Year Party",
        date: "2024-12-30",
        location: "Lagos, Nigeria",
        description: "Join us to celebrate the end of the year with a grand party.",
        registrationLink: "#",
      },
    ],
    Past: [
      {
        image: "/images/eventimg.jpg",
        title: "Sustainability Forum 2023",
        date: "2023-10-10",
        highlightsLink: "#",
        description: "Key insights into sustainable practices and innovations.",
      },
      {
        image: "/images/eventimg.jpg",
        title: "Global Health Conference 2023",
        date: "2023-07-20",
        highlightsLink: "#",
        description: "Highlights from one of our most impactful events to date.",
      },
    ],
  };

  const filteredEvents = data[activeTab].filter((event) => {
    const eventDate = new Date(event.date);
    return (
      activeTab === "Upcoming"
        ? eventDate >= new Date() && eventDate.toDateString() === selectedDate.toDateString()
        : eventDate < new Date()
    );
  });

  const upcomingEventDates = data.Upcoming.map((event) => new Date(event.date));

  const tileClassName = ({ date }) => {
    return upcomingEventDates.some(
      (eventDate) => eventDate.toDateString() === date.toDateString()
    )
      ? "highlighted-date"
      : "";
  };

  return (
    <div>
      {/* Header Section */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/events.png')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Events</h1>
          <p className="text-white mt-4 max-w-xl text-center">
            Stay up to date with our upcoming and past events.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-center space-x-4">
          {["Upcoming", "Past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded ${
                activeTab === tab
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-600"
              } transition`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar for Upcoming Events */}
      {activeTab === "Upcoming" && (
        <div className="container mx-auto my-8">
          <h2 className="text-lg font-semibold text-gray-800 text-center">Filter by Date:</h2>
          <div className="flex justify-center mt-4">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="border shadow-md"
              tileClassName={tileClassName}
              showNeighboringMonth={false}
            />
          </div>
          <style jsx global>{`
            .react-calendar {
              border: none;
              font-family: Arial, Helvetica, sans-serif;
              background-color: #f0f8ff; /* Changed the background color */
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              width: 100%;
              max-width: 800px; /* Increased the width */
              color: red;
            }
            .react-calendar__tile {
              padding: 15px;
              border-radius: 5px;
              transition: 0.3s;
              color: #000;
              background-color: #f0f8ff; /* Changed the background color */
            }
            .react-calendar__tile--active {
              background: #2d8a56;
              color: green;
              border-radius: 5px;
            }
            .react-calendar__tile--now {
              background: #e0f7ec;
            }
            .highlighted-date {
              background: #ffd700;
              color: black !important;
              font-weight: bold;
              border-radius: 5px;
            }
          `}</style>
        </div>
      )}

      {/* Events Content */}
      <div className="container mx-auto py-8">
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg cursor-pointer"
                onClick={() => setModalData(event)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-green-700">{event.title}</h3>
                  <p className="text-gray-700 mt-1">
                    <strong>Date:</strong> {new Date(event.date).toDateString()}
                  </p>
                  <p className="text-gray-700">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="text-gray-700 mt-2 truncate">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No events found for the selected date.</p>
        )}
      </div>

      {/* Past Events */}
      {activeTab === "Past" && (
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.Past.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-green-700">{event.title}</h3>
                  <p className="text-gray-700 mt-1">
                    <strong>Date:</strong> {new Date(event.date).toDateString()}
                  </p>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                  <a
                    href={event.highlightsLink}
                    className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    View Highlights
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for Event Details */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{modalData.title}</h2>
            <p className="text-gray-700">
              <strong>Date:</strong> {new Date(modalData.date).toDateString()}
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> {modalData.location}
            </p>
            <p className="text-gray-700 mt-4">{modalData.description}</p>
            {modalData.registrationLink && (
              <a
                href={modalData.registrationLink}
                className="mt-4 inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Register Now
              </a>
            )}
            <button
              onClick={() => setModalData(null)}
              className="mt-6 inline-block px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default EventsPage;
