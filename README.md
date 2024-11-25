# React Developer Task Solution

This repository contains the solutions for the tasks assigned for the "React.js Developer" position.

## Table of Contents
- [Problem 1: Pricing Table](#problem-1-pricing-table)
- [Problem 2: Product List Optimization](#problem-2-product-list-optimization)
- [Problem 3: Code Refactor](#problem-3-code-refactor)

## Problem 1: Pricing Table

**Objective**: Develop a responsive pricing table similar to the one in the screenshot using **React**, **Redux**, and **Styled Components**.

**Features**:
- The table is fully responsive.
- Dynamic columns based on the provided JSON data, which includes growth plans and the option to add/remove plans dynamically.
- Dropdown in the Growth column to display multiple growth plans.
- Tooltips for additional information.
- The design is created without using any UI libraries.

**Solution**:
- Created a reusable component structure with Redux to manage state.
- Styled the components using Styled Components for CSS.
- The system dynamically renders the table and adjusts to changes in the data (such as adding/removing plans).
- Data is stored in a JSON file, which makes it easy to update and maintain.
- The codebase is clean and follows component-based architecture.

**Live Site**: [Pricing Table](https://arraytics.vercel.app/)

## Problem 2: Product List Optimization

**Objective**: Optimize a React application that displays a list of products, allowing users to add new products through a form.

**Solution**:
- Improved the performance and structure of the product list rendering.
- Used memoization techniques to prevent unnecessary re-renders.

## Problem 3: Code Refactor

**Objective**: Refactor a provided codebase as required, without setting up a new React project.

**Solution**:
- Refactored the code to improve readability, performance, and maintainability.
- Ensured the refactored codebase is clean and well-organized.



