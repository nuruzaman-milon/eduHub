import Test from "@/components/shared/Test";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getCourses } from "@/queries/courses";

export default async function Home() {
  const courses = await getCourses();
  console.log(courses);
  
  return (
    <main>
      <Test />
    </main>
  );
}
