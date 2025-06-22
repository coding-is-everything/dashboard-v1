# React Dashboard

A modern, responsive dashboard application built with React, Vite, and Material-UI. This project features a kanban board, calendar integration, and various data visualization components.

![Dashboard Preview](public/preview.png)

## Features

- 📊 Interactive Kanban board with drag-and-drop functionality
- 📅 FullCalendar integration for scheduling and events
- 📊 ECharts for beautiful data visualizations
- 🎨 Material-UI components for a polished UI
- 🚀 Built with Vite for fast development and optimized production builds
- 🔄 React Router for seamless navigation
- 📱 Fully responsive design

## Tech Stack

- ⚛️ React 19
- 🎨 Material-UI v7
- 📅 FullCalendar
- 📊 ECharts
- 🛠️ Vite
- 🔄 React Router
- 🗄️ Zustand for state management

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/dashboard-v1.git
   cd dashboard-v1
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Layout components
│   ├── Sidebar/         # Sidebar navigation
│   └── AddCardModal/    # Modal for adding new cards
├── pages/               # Page components
├── store/               # State management
├── utils/               # Utility functions
├── App.jsx              # Main App component
└── main.jsx             # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [ECharts](https://echarts.apache.org/)
- [FullCalendar](https://fullcalendar.io/)
