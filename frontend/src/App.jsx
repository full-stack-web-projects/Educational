import { Button } from "@/components/ui/button";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./pages/home/Homepage";
import CoursePage from "./pages/courses/CoursePage";
import SingleCoursePage from "./pages/singleCourse/SingleCoursePage";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "/courses",
              element: <CoursePage />,
            },
            {
              path: "/singleCourse",
              element: <SingleCoursePage />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="mt-20">
      <RouterProvider router={router} />
    </div>
  );
}
