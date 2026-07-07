"use client";
import { motion } from "framer-motion";
import { LucideIcon, CheckCircle2 } from "lucide-react";
import clsx from "clsx";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  active?: boolean;
  completed?: boolean;
};

export default function WorkflowStep({
  icon: Icon,
  title,
  description,
  active,
  completed,
}: Props) {
 return (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    animate={{
      scale: active ? 1.03 : 1,
    }}
    transition={{
      duration: 0.4,
    }}
    className={clsx(
      "flex items-center gap-5 rounded-2xl border p-5 transition-all duration-500",
      active
        ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,.15)]"
        : "border-white/10 bg-white/5"
    )}
  >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600">
        {completed ? (
          <CheckCircle2 className="h-6 w-6 text-white" />
        ) : (
          <Icon className="h-6 w-6 text-white" />
        )}
      </div>

      <div>
        <h3 className="font-semibold text-white">{title}</h3>

        <p className="text-sm text-zinc-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}