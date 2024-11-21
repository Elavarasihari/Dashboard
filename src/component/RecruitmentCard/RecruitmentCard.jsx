import React from "react";

function RecruitmentCard({ details }) {
  const {
    expired,
    jobTitle,
    description,
    role,
    duration,
    workMode,
    prefferdColors,
  } = details;
  return (
    <div className="p-4 rounded-md bg-white border border-stone-300">
      <p className="text-xs py-1 px-3 rounded-md border inline-block">
        Active untill: <span className="font-bold">{expired}</span>
      </p>
      <p className="text-xl font-bold pt-5 pb-3">{jobTitle}</p>
      <p className="text-xs text-gray-500 ellipsis mb-6">{description}</p>
      <div className="flex flex-wrap items-center gap-2">
        <div
          className="inline-block text-sm py-1 px-3 rounded-md"
          style={{ backgroundColor: prefferdColors.secondary }}
        >
          <p className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: prefferdColors.primary }}
            ></div>
            {role}
          </p>
        </div>
        <p className="inline-block text-sm py-1 px-3 border rounded-md">
          {duration}
        </p>
        <p className="inline-block text-sm py-1 px-3 border rounded-md">
          {workMode}
        </p>
      </div>
    </div>
  );
}

export default RecruitmentCard;
