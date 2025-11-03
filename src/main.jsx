import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "./Components/ThemeContext/ThemeContext";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
