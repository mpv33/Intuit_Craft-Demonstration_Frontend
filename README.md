# Sports Day Event Registration | Intuit | Frontend | SE-2

## Overview

This ReactJS web app allows users to register for events during a Sports Day. Users can view a list of events, select events to participate in, and see a separate list of their selected events. The app handles constraints such as limiting the number of selected events to three and ensuring no time conflicts between selected events.

## Features

1. **Event List**: Displays a list of all events in a card tile format.
2. **Event Details**: Each event card displays the event name, category, and timings.
3. **Select/Deselect Events**: Users can select an event from the event list or deselect it from their selected events list.
4. **Selected Events**: Shows a separate list of all selected events on the right-hand side of the screen.
5. **Constraints Handling**: 
   - Users can select a maximum of 3 events.
   - Users cannot select events that conflict with the timings of already selected events.

## Mock API

- The events data can be fetched from a mock API:
  - URL: `https://run.mocky.io/v3/2744c231-8991-4ae8-bc45-1f645437585a`
- Alternatively, you can use the provided mock data in the application.

## Mock Data

```json
[
  {
    "id": 1,
    "event_name": "Butterfly 100M",
    "event_category": "Swimming",
    "start_time": "2022-12-17 13:00:00",
    "end_time": "2022-12-17 14:00:00"
  },
  {
    "id": 2,
    "event_name": "Backstroke 100M",
    "event_category": "Swimming",
    "start_time": "2022-12-17 13:30:00",
    "end_time": "2022-12-17 14:30:00"
  },
  {
    "id": 3,
    "event_name": "Freestyle 400M",
    "event_category": "Swimming",
    "start_time": "2022-12-17 15:00:00",
    "end_time": "2022-12-17 16:00:00"
  },
  {
    "id": 4,
    "event_name": "High Jump",
    "event_category": "Athletics",
    "start_time": "2022-12-17 13:00:00",
    "end_time": "2022-12-17 14:00:00"
  },
  {
    "id": 5,
    "event_name": "Triple Jump",
    "event_category": "Athletics",
    "start_time": "2022-12-17 16:00:00",
    "end_time": "2022-12-17 17:00:00"
  },
  {
    "id": 6,
    "event_name": "Long Jump",
    "event_category": "Athletics",
    "start_time": "2022-12-17 17:00:00",
    "end_time": "2022-12-17 18:00:00"
  },
  {
    "id": 7,
    "event_name": "100M Sprint",
    "event_category": "Athletics",
    "start_time": "2022-12-17 17:00:00",
    "end_time": "2022-12-17 18:00:00"
  },
  {
    "id": 8,
    "event_name": "Lightweight 60kg",
    "event_category": "Boxing",
    "start_time": "2022-12-17 18:00:00",
    "end_time": "2022-12-17 19:00:00"
  },
  {
    "id": 9,
    "event_name": "Middleweight 75 kg",
    "event_category": "Boxing",
    "start_time": "2022-12-17 19:00:00",
    "end_time": "2022-12-17 20:00:00"
  },
  {
    "id": 10,
    "event_name": "Heavyweight 91kg",
    "event_category": "Boxing",
    "start_time": "2022-12-17 20:00:00",
    "end_time": "2022-12-17 22:00:00"
  }
]
```

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mpv33/Intuit_Craft-Demonstration_Frontend.git
   cd Intuit_Craft-Demonstration_Frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000`.

## Project Structure

```
src/
|-- components/
|   |-- EventCard.js
|-- App.js
|-- index.css
|-- index.js
```

- **components/EventCard.js**: Component for rendering individual event cards.
- **App.js**: Main component that handles event selection and displays the event lists.
- **index.css**: Custom styles using Tailwind CSS.
- **index.js**: Entry point of the application.

## Custom Styles

This project uses Tailwind CSS for styling. You can customize the styles by modifying the `index.css` file.

## Tooltips

Tooltips are used to provide feedback to users when they try to select more than 3 events or when there is a timing conflict. Tooltips are implemented using the `react-tooltip` package.

## Constraints Handling

- Users can select a maximum of 3 events.
- Users cannot select events that have conflicting timings with already selected events.

## Deployed url : https://intuit-frontend-test.vercel.app/
## Screenshots

![Event List- Avaialble/Selected](/events.png)
*Event List displaying available events*


These screenshots provide a visual overview of the app's functionality and interface. Ensure you add actual screenshots in the `screenshots` directory of your project.
