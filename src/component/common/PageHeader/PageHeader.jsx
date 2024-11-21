import React from "react";

function PageHeader({
  headerIcon,
  title,
  subTitle,
  primaryButtonText,
  primaryButtonIcon,
  secondaryButtonText,
  secondaryButtonIcon,
  secondaryButtonIcon2,
}) {
  return (
    <div className="flex md:items-center md:justify-between md:flex-row flex-col items-start gap-3">
      <div className="flex items-center gap-3">
        <div className="p-2 w-9 h-9 flex items-center justify-center bg-white drop-shadow-md rounded-md">
          {headerIcon}
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-xs text-gray-500">{subTitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="customSecondaryButton">
          {secondaryButtonIcon} {secondaryButtonText}{" "}
          {secondaryButtonIcon2 && secondaryButtonIcon2}
        </button>
        <button className="customPrimaryButton">
          {primaryButtonIcon} {primaryButtonText}
        </button>
      </div>
    </div>
  );
}

export default PageHeader;
