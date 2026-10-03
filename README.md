React Native Routine & Analytics App
A structured task management and progress tracking application built with React Native. 
This app separates core task definitions from time-based filtering, allowing users to seamlessly manage one-time events alongside recurring routines, 
all backed by visual performance analytics.

Interface Architecture
The screen layout is optimized for quick filtering and intuitive navigation, using a standard mobile architecture:

Fixed Top Date Bar: Displays the current date (e.g., NOV-22) permanently pinned across all views.

Timeframe Filter Pills: A swipeable horizontal row directly beneath the date. This allows users to rapidly filter the Main Content Area by Today, This Week, This Month, or view standalone One-Time tasks.

Bottom Navigation Bar: Switches between the core operational modes of the app: Tasks (list and creation), Overview (calendar tracking), and Statistics (data visualization).

🛠 Feature Breakdown
1. Task Management & Data Model (Tasks View)
The app utilizes a dual-model task system stored locally via AsyncStorage.

Routine Tasks: Built for recurring habits. Users can select specific days of the week (e.g., Mon, Wed, Fri) or specific dates of the month for tasks to automatically populate.

One-Time Tasks: Standalone tasks that do not repeat.

Overdue Rollover Logic: If a scheduled task is missed, it does not disappear. It automatically rolls over into the current day marked distinctly as Overdue, ensuring nothing slips through the cracks.

Quick Action (+): A Floating Action Button (FAB) allows instant creation, where users can toggle between "One-Time" and "Routine" setup.

2. Progress Tracking (Overview View)
A unified, interactive calendar designed to give a high-level view of habit consistency.

Color-Coded Status:

Green Days: Indicates full completion of all scheduled routines for that date.

Red Days: Highlights incomplete dates where routines were missed.

Interactive Inspection: Tapping on any red date slides up a bottom sheet, displaying an itemized list of the exact tasks or routines that were missed or left overdue on that specific day.

3. Visual Analytics (Statistics View)
Visualizes productivity and efficiency across both timeframe filters and task models.

Categorized Performance: Tasks are grouped into custom categories (e.g., Work, Shopping, Gaming, Personal).

Dual-Line Comparison Graph:

Total Time Required: Plots the estimated time allocated for the scheduled tasks.

Progressed Time: Displays the actual logged execution time to highlight efficiency and identify gaps in the user's schedule.
