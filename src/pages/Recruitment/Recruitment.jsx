import React from "react";
import PageHeader from "../../component/common/PageHeader/PageHeader";
import { RiUserAddLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { TbUsersPlus } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { jobList } from "../../constants/localConstants";
import RecruitmentCard from "../../component/RecruitmentCard/RecruitmentCard";

function Recruitment() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        headerIcon={<RiUserAddLine color="#6366f1" />}
        title="Recruitment"
        subTitle="Manage recruitment process"
        primaryButtonText="Create New Job"
        primaryButtonIcon={<FaPlus />}
        secondaryButtonText='Active Jobs'
        secondaryButtonIcon={<TbUsersPlus />}
        secondaryButtonIcon2={<IoIosArrowDown />}
      />
      <section className="pt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {jobList.map((details)=><RecruitmentCard details={details} />)}
      </section>
    </div>
  );
}

export default Recruitment;
