"use client";
import { toast } from "sonner";
import { Button } from "../ui/button";


type Props = {}

const Test = (props: Props) => {
    const handleShowToast = () => {
        toast.success("success");
    }
  return (
    <div>
        <Button onClick={handleShowToast} variant={"outline"} className="bg-green-300 hover:bg-green-600">Click Me</Button>
    </div>
  )
};

export default Test;