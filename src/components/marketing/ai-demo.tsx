"use client";
import { useState } from "react";
import Container from "@/src/components/shared/container";
import AIWorkflow from "./ai-workflow";
import CubeScene from "@/src/modules/cube-viewer/components/cube-scene";
import { Button } from "@/src/components/ui/button";
import AIStatus from "./ai-status";
import DemoControls from "./demo-controls";
import DemoProgress from "./demo-progress";
import SectionHeader from "../shared/section-header";
export default function AIDemo() {

    const [activeStep, setActiveStep] = useState(0);

    return (
    <section className="py-20">

      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

  <SectionHeader
  badge="Live Demo"
  title="See"
  highlight="CubeMaster AI"
  description="Experience how our AI analyzes, validates and solves
            any Rubik's Cube in seconds."
/>
    
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
            
<div>
  <AIStatus status="Scanning Cube..." />


<DemoProgress progress =
{(activeStep + 1) / AIWorkflow.length * 25}/>

<AIWorkflow
    activeStep={activeStep}
    setActiveStep={setActiveStep}
    
/>
  {/* <AIWorkflow /> */}

  <DemoControls />
</div>
        

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="h-[450px]">
             <CubeScene
    activeStep={activeStep}
/>
            </div>

          </div>

        </div>

        <div className="mt-14 flex justify-center">

          <Button>
            Try Live Demo
          </Button>

        </div>

      </Container>

    </section>
  );
}