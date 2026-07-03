import { useEffect } from "react";
import { router } from "../app.routes";

export default function ScrollToTop() {
  useEffect(() => {
    return router.subscribe((state) => {
      window.scrollTo(0, 0);
    });
  }, []);

  return null;
}