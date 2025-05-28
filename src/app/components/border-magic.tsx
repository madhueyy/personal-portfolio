import React from "react";

function BorderMagic() {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-violet-600 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Border Magic
      </span>
    </button>
  );
}

export default BorderMagic;
