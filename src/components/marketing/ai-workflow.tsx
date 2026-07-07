"use client";

import { useEffect, useState } from "react";
import { AI_WORKFLOW } from "@/src/config/ai-demo";
import WorkflowStep from "./workflow-step";

// export default function AIWorkflow() {
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActive((prev) => (prev + 1) % AI_WORKFLOW.length);
//     }, 2000);

//     return () => clearInterval(timer);
//   }, []);
type Props = {
    activeStep: number;
    setActiveStep: React.Dispatch<
        React.SetStateAction<number>
    >;
};

export default function AIWorkflow({
    activeStep,
    setActiveStep,
}: Props) {

    useEffect(() => {

    const timer = setInterval(() => {

        setActiveStep((prev) => (prev + 1) % 4);

    }, 2000);

    return () => clearInterval(timer);

}, [setActiveStep]);
  return (
    <div className="space-y-5">
      {AI_WORKFLOW.map((step, index) => (
        <WorkflowStep
          key={step.title}
          {...step}
          active={index === activeStep}
completed={index < activeStep}
        />
      ))}
    </div>
  );
}