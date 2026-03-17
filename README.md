# Granted — Financial Management Dashboard

A production-ready web application for managing institutional finances, including allocations, receipts, expenditures, attachments, analytics, and reporting through a unified dashboard.

The system is designed for departments, organizations, grant programs, or administrative offices that require structured financial tracking and data-driven insights.

## Overview

Granted provides a centralized interface to:

* Track budget allocations across categories
* Record incoming funds (receipts)
* Monitor expenditures with detailed metadata
* Analyze spending patterns
* Generate filtered reports
* Export data to Excel
* Manage supporting documents
* Enforce permission-based access control

All financial modules are integrated into a single dashboard to provide a comprehensive view of financial activity.

## Key Features

### Dashboard

* Real-time financial summary

* Receipts versus expenditure comparison

* Category-wise analysis

* Balance visualization

* Expandable breakdown views

* Multiple currency display scales:

  * Absolute values
  * Thousands
  * Lakhs
  * Crores

* Responsive interactive charts

### Allocations Module

Manages budget allocations distributed across categories.

Capabilities:

* Create allocation records
* Assign amounts to multiple categories
* View allocation history
* Edit or delete records (subject to permissions)
* Filter by financial year or allocation number

### Receipts Module

Tracks incoming funds and supporting documentation.

Supported fields:

* Receipt date
* Sanction order number
* Category
* Amount
* Attachment

Features:

* Search and filtering
* Pagination
* Edit and delete operations
* Attachment viewing

### Expenditure Module

Provides detailed tracking of outgoing funds.

Supported fields:

* Bill number
* Voucher number
* Category and sub-category
* Department
* Amount
* Attachment

Features:

* Advanced filtering
* Category-dependent sub-categories
* Edit and delete functionality
* Complete transaction history

### Reports and Analytics

Generates financial reports using flexible filters:

* Date range
* Financial year
* Category or sub-category
* Department

Reports can be exported for external use.

### Excel Export

Data tables can be exported as `.xlsx` files for offline analysis, record keeping, or submission.

### Permission-Based Access Control

The interface adapts according to user privileges:

* View-only access
* Modification permissions
* Restricted editing and deletion

Permissions are retrieved dynamically from backend services.

## Technology Stack

### Frontend

* React 19
* TypeScript
* Vite
* Tailwind CSS 4
* shadcn/ui
* Radix UI
* Recharts
* React Router
* Lucide Icons

### Libraries and Utilities

* SheetJS (xlsx) for Excel export
* react-hook-form for form management
* clsx and class-variance-authority for styling utilities

## Project Structure

```
granted/
│
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── DataTable.tsx
│   │   ├── AddEntryDialog.tsx
│   │   ├── EditDeleteDialog.tsx
│   │   └── ui/
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   └── mock.ts
│   │
│   ├── models/
│   │   └── data.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── vite.config.ts
├── package.json
└── README.md
```

## Backend Integration

This frontend requires a backend API (for example, PHP or Node.js) to handle data operations.

Expected API structure:

```
permissions/
  canView.php
  canModify.php

allocations/
  create.php
  read.php
  update.php
  delete.php

receipts/
  create.php
  read.php
  update.php
  delete.php

expenditures/
  create.php
  read.php
  update.php
  delete.php

upload.php
```

## Environment Configuration

Create a `.env` file in the project root:

```
VITE_BASE_URL=http://localhost:8000/
```

This variable specifies the base URL for backend API requests.

## Getting Started

### Prerequisites

* Node.js version 18 or later
* npm, pnpm, or yarn

### Clone the Repository

```bash
git clone https://github.com/kanavgoyal898/granted.git
cd granted
```

### Install Dependencies

```bash
npm install
```

### Configure Environment

Create the `.env` file as described above.

### Start Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Financial Year Logic

The application follows the Indian financial year cycle:

April to March

Example:

```
1 April 2024 – 31 March 2025 → FY 2024–2025
```


## File Attachment Support

Supported file types include:

* PDF documents
* Image formats such as PNG and JPG

Files are uploaded to the backend and stored externally.

## Charts and Visualization

The dashboard provides responsive visualizations for:

* Category-wise expenditure
* Receipts versus expenses
* Budget utilization
* Distribution analysis

Charts automatically adjust to different screen sizes.

## User Interface

* Clean and modern design
* Fully responsive layout
* Accessible UI components
* Mobile-friendly tables
* Dark mode ready using CSS variables

## Customization

Application configuration can be modified in:

```
src/models/data.ts
```

Configurable elements include:

* Categories
* Sub-categories
* Departments
* Chart settings
* Labels

## Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| npm run dev     | Start development server |
| npm run build   | Build production bundle  |
| npm run preview | Preview production build |
| npm run lint    | Run ESLint               |

---

## Security and Permissions

* Sensitive operations handled by backend services
* Permission checks enforced server-side
* Client interface reflects authorization state
