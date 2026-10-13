import type { Metadata } from "next";
import { WorkView } from "@/features/work/work-view";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and earlier work.",
};

export default function WorkPage() {
  return <WorkView />;
}
